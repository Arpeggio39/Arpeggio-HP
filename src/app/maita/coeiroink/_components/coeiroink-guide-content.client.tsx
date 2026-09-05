"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore, useState } from "react";

import { DownloadIcon } from "@/components/ui/icons";
import {
  coeiroinkDownloads,
  coeiroinkGuideIntro,
  getDownloadItems,
  getInstallSteps,
  type GuidePlatform,
  type GuideStep,
} from "@/data/coeiroink-guide";

import {
  getDetectedPlatform,
  getDetectedPlatformLabel,
  type DetectedPlatform,
} from "./detect-platform";

function subscribeToNavigation(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getServerDetectedPlatform(): DetectedPlatform {
  return "unknown";
}

function useDetectedPlatform(): DetectedPlatform {
  return useSyncExternalStore(
    subscribeToNavigation,
    getDetectedPlatform,
    getServerDetectedPlatform,
  );
}

function getInitialPlatform(detected: DetectedPlatform): GuidePlatform {
  return detected === "mac" ? "mac" : "windows";
}

function GuideStepCard({
  step,
  index,
}: Readonly<{ step: GuideStep; index: number }>) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <h3 className="text-lg font-bold text-maita-purple sm:text-xl">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
        {step.body}
      </p>

      {step.images ? (
        <div className="mt-4 flex flex-col gap-4">
          {step.images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-xl border border-gray-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 720px, 100vw"
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      ) : null}

      {step.note ? (
        <p className="mt-4 rounded-lg bg-miku-yellow px-4 py-3 text-sm leading-relaxed text-miku-black">
          {step.note}
        </p>
      ) : null}

      <span className="sr-only">ステップ {index + 1}</span>
    </section>
  );
}

export function CoeiroinkGuideContent() {
  const detectedPlatform = useDetectedPlatform();
  const [platformOverride, setPlatformOverride] = useState<GuidePlatform | null>(
    null,
  );
  const platform = platformOverride ?? getInitialPlatform(detectedPlatform);

  const downloadItems = getDownloadItems(platform);
  const steps = getInstallSteps(platform);
  const isAutoDetected =
    platformOverride === null &&
    detectedPlatform !== "unknown" &&
    platform === detectedPlatform;

  return (
    <main id="main-content" className="bg-gray-100 text-miku-black">
      <header className="bg-black px-4 py-16 text-center text-white sm:py-20">
        <p className="text-sm tracking-widest text-gray-300 sm:text-base">
          琵音マイタ COEIROINK音源
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl">
          {coeiroinkGuideIntro.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          {coeiroinkGuideIntro.subtitle}
        </p>
        <Link
          href="/maita/"
          className="mt-6 inline-block text-sm text-miku-cyan underline transition-colors hover:text-white"
        >
          ← マイタ音源一覧に戻る
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-12">
        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold sm:text-2xl">
            {coeiroinkGuideIntro.aboutTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed sm:text-base">
            {coeiroinkGuideIntro.aboutBody}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            ⚠️ {coeiroinkGuideIntro.aboutNote}
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold sm:text-2xl">お使いの環境</h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            {detectedPlatform === "unknown"
              ? "OS を選んで、手順を切り替えてください。"
              : `お使いの OS を ${getDetectedPlatformLabel(detectedPlatform)} と判定しました。違う場合は変更してください。`}
          </p>

          <div
            className="mt-4 flex rounded-xl bg-gray-100 p-1"
            role="tablist"
            aria-label="OS の選択"
          >
            {(["windows", "mac"] as const).map((value) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={platform === value}
                onClick={() => setPlatformOverride(value)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:text-base ${
                  platform === value
                    ? "bg-maita-purple text-white!"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                {value === "windows" ? "Windows" : "Mac"}
              </button>
            ))}
          </div>

          {isAutoDetected ? (
            <p className="mt-3 text-xs text-miku-blue sm:text-sm">
              自動判定: {getDetectedPlatformLabel(detectedPlatform)}
            </p>
          ) : null}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold sm:text-2xl">
            {coeiroinkGuideIntro.downloadTitle}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {downloadItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                  {item.description}
                </p>
                {item.note ? (
                  <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                    {item.note}{" "}
                    <a
                      href={coeiroinkDownloads.releasesPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-miku-blue underline"
                    >
                      Releases ページ
                    </a>
                  </p>
                ) : null}
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-4 inline-flex items-center rounded-lg bg-maita-purple px-5 py-2.5 text-sm font-bold text-white! transition-colors hover:bg-maita-purple-hover sm:text-base"
                >
                  <DownloadIcon className="mr-2 size-5" />
                  {item.buttonLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">インストール手順</h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            {platform === "windows"
              ? "Windows 向けの手順を表示しています。上から順番に進めてください。"
              : "Mac 向けの手順を表示しています。上から順番に進めてください。"}
          </p>

          <div className="mt-6 flex flex-col gap-5">
            {steps.map((step, index) => (
              <GuideStepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
