"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { DownloadIcon, MusicNoteIcon } from "@/components/ui/icons";
import { voicebanks, type Voicebank } from "@/data/maita";

import styles from "./maita.module.css";

type Language = "ja" | "en";
type VoicebankModal =
  | { type: "design"; voicebank: Voicebank }
  | { type: "download"; voicebank: Voicebank; language: Language }
  | null;

const DOWNLOAD_COPY = {
  ja: {
    title: (name: string) => `${name}をダウンロード`,
    message: "ダウンロードを続行するには、利用規約をご確認ください。",
    agreementPrefix: "",
    agreementLink: "利用規約",
    agreementSuffix: "に同意します",
    close: "閉じる",
    download: "ダウンロード",
  },
  en: {
    title: (name: string) => `Download ${name}`,
    message:
      "Please review the terms of use before continuing with the download.",
    agreementPrefix: "I agree to the ",
    agreementLink: "terms of use",
    agreementSuffix: "",
    close: "Close",
    download: "Download",
  },
} as const;

type BorderAnimationStyle = CSSProperties &
  Record<`--voicebank-color-${number}`, string>;

function getBorderAnimationStyle(
  colors: readonly string[],
): BorderAnimationStyle {
  return Object.fromEntries(
    Array.from({ length: 11 }, (_, index) => [
      `--voicebank-color-${index}`,
      colors[index % colors.length],
    ]),
  ) as BorderAnimationStyle;
}

function getPreferredLanguage(): Language {
  const requestedLanguage = new URLSearchParams(window.location.search).get(
    "lang",
  );
  if (requestedLanguage === "ja" || requestedLanguage === "en") {
    return requestedLanguage;
  }

  return window.navigator.language.startsWith("ja") ? "ja" : "en";
}

export function VoicebankList() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [modal, setModal] = useState<VoicebankModal>(null);
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (modal && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [modal]);

  function resetModal() {
    setModal(null);
    setIsAgreed(false);
  }

  function closeModal() {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
      return;
    }

    resetModal();
  }

  function openDownload(voicebank: Voicebank) {
    setIsAgreed(false);
    setModal({
      type: "download",
      voicebank,
      language: getPreferredLanguage(),
    });
  }

  function downloadVoicebank() {
    if (modal?.type !== "download" || !isAgreed) {
      return;
    }

    window.open(modal.voicebank.downloadUrl, "_blank", "noopener,noreferrer");
    closeModal();
  }

  const copy =
    DOWNLOAD_COPY[modal?.type === "download" ? modal.language : "ja"];

  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start space-y-6 sm:space-y-8">
        {voicebanks.map((voicebank) => (
          <article
            key={voicebank.id}
            className="w-full rounded-3xl bg-white px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
          >
            <div className="flex flex-col items-center justify-center py-3 tracking-wider sm:py-4">
              <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div
                  className={`flex flex-row items-center space-x-2 sm:space-x-0 md:space-x-4 ${
                    voicebank.design ? "" : "w-full justify-center"
                  }`}
                >
                  {voicebank.design ? (
                    <button
                      type="button"
                      onClick={() => setModal({ type: "design", voicebank })}
                      className="relative w-1/2 cursor-zoom-in rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maita-purple md:w-auto md:shrink-0"
                      aria-label={`${voicebank.name}のデザイン画像を拡大`}
                    >
                      <Image
                        src={voicebank.design.src}
                        alt={`${voicebank.name}の3視点ポーズ`}
                        width={voicebank.design.width}
                        height={voicebank.design.height}
                        sizes="(min-width: 768px) 320px, 50vw"
                        className={`${styles.borderCycle} h-auto w-full rounded-2xl border-4 object-cover shadow-2xl transition-transform duration-500 hover:scale-105 md:w-80 md:max-w-none`}
                        style={getBorderAnimationStyle(voicebank.accentColors)}
                      />
                    </button>
                  ) : null}

                  <Image
                    src={voicebank.portrait.src}
                    alt={`${voicebank.name}の立ち絵`}
                    width={voicebank.portrait.width}
                    height={voicebank.portrait.height}
                    sizes="(min-width: 768px) 224px, 50vw"
                    className={`h-auto object-contain md:shrink-0 ${
                      voicebank.design
                        ? "w-1/2 md:w-56"
                        : "w-full max-w-xs md:max-w-sm"
                    }`}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col items-start justify-center space-y-3 sm:space-y-4">
                  <h2 className="text-xl font-bold sm:text-lg md:text-2xl">
                    {voicebank.name}
                  </h2>
                  <p className="text-sm leading-relaxed md:text-base">
                    {voicebank.description}
                  </p>
                  <div
                    className={`flex w-full flex-row items-start justify-center gap-2 md:gap-4 ${
                      voicebank.demoSongUrl ? "" : "sm:justify-start"
                    }`}
                  >
                    {voicebank.demoSongUrl ? (
                      <a
                        href={voicebank.demoSongUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center rounded-lg border-2 border-transparent bg-maita-purple px-4 py-2.5 text-sm font-bold text-white! hover:bg-maita-purple-hover sm:py-3 md:px-6 md:text-base"
                      >
                        <MusicNoteIcon className="mr-1.5 size-5 sm:mr-2" />
                        デモソング
                      </a>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => openDownload(voicebank)}
                      className={`flex items-center justify-center rounded-lg border-2 border-transparent bg-maita-purple px-4 py-2.5 text-sm font-bold text-white! transition-colors hover:bg-maita-purple-hover sm:py-3 md:px-6 md:text-base ${
                        voicebank.demoSongUrl ? "flex-1" : "w-full sm:w-auto"
                      }`}
                    >
                      <DownloadIcon className="mr-1.5 size-5 sm:mr-2" />
                      ダウンロード
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 sm:mt-2 md:text-sm">
                    Designed by {voicebank.illustrator}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {modal ? (
        <dialog
          ref={dialogRef}
          aria-modal="true"
          aria-labelledby={
            modal.type === "design"
              ? "design-dialog-title"
              : "download-dialog-title"
          }
          aria-describedby={
            modal.type === "download"
              ? "download-dialog-description"
              : undefined
          }
          className={`m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] bg-transparent p-0 text-black backdrop:bg-black/70 ${
            modal.type === "design" ? "max-w-6xl" : "max-w-lg"
          }`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
          onClose={resetModal}
        >
          {modal.type === "download" ? (
            <div className="rounded-lg bg-white p-6">
              <h2
                id="download-dialog-title"
                className="mb-4 text-2xl font-bold"
              >
                {copy.title(modal.voicebank.name)}
              </h2>
              <p id="download-dialog-description" className="mb-4">
                {copy.message}
              </p>
              <div className="mb-4 flex items-center">
                <input
                  id="voicebank-terms-agreement"
                  type="checkbox"
                  className="mr-2"
                  checked={isAgreed}
                  aria-labelledby="voicebank-terms-agreement-label"
                  onChange={(event) => setIsAgreed(event.target.checked)}
                />
                <span id="voicebank-terms-agreement-label">
                  {copy.agreementPrefix ? (
                    <label htmlFor="voicebank-terms-agreement">
                      {copy.agreementPrefix}
                    </label>
                  ) : null}
                  <Link
                    href={`/maita/term/?lang=${modal.language}`}
                    target="_blank"
                    className="text-miku-blue underline transition-colors hover:text-miku-pink"
                  >
                    {copy.agreementLink}
                  </Link>
                  {copy.agreementSuffix ? (
                    <label htmlFor="voicebank-terms-agreement">
                      {copy.agreementSuffix}
                    </label>
                  ) : null}
                </span>
              </div>

              <div className="flex justify-end space-x-4">
                <form method="dialog">
                  <button
                    type="submit"
                    className="rounded px-4 py-2 text-blue-500 transition-colors hover:bg-gray-200"
                  >
                    {copy.close}
                  </button>
                </form>
                <button
                  type="button"
                  onClick={downloadVoicebank}
                  disabled={!isAgreed}
                  className={`rounded-lg px-4 py-2 transition-colors ${
                    isAgreed
                      ? "bg-maita-purple text-white! hover:bg-miku-pink"
                      : "cursor-not-allowed bg-gray-300 text-gray-500"
                  }`}
                >
                  {copy.download}
                </button>
              </div>
            </div>
          ) : modal.voicebank.design ? (
            <div className="relative max-h-[calc(100dvh-2rem)] overflow-auto rounded-lg bg-white p-4 shadow-lg">
              <h2 id="design-dialog-title" className="sr-only">
                {modal.voicebank.name}のデザイン画像
              </h2>
              <form method="dialog">
                <button
                  type="submit"
                  className="absolute top-3 left-4 rounded px-3 py-2 text-black transition-colors hover:bg-gray-100"
                >
                  閉じる
                </button>
              </form>
              <span className="absolute right-2 bottom-2 text-gray-500">
                Designed by {modal.voicebank.illustrator}
              </span>
              <Image
                src={modal.voicebank.design.src}
                alt={`${modal.voicebank.name}のデザイン画像`}
                width={modal.voicebank.design.width}
                height={modal.voicebank.design.height}
                className="m-8 max-h-[80vh] w-auto object-contain"
              />
            </div>
          ) : null}
        </dialog>
      ) : null}
    </>
  );
}
