"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import {
  BookOpenIcon,
  DownloadIcon,
  MusicNoteIcon,
} from "@/components/ui/icons";
import { voicebanks, type Voicebank } from "@/data/maita";

import styles from "./maita.module.css";
import {
  getPreferredLanguage,
  TermsDownloadDialog,
} from "./terms-download-dialog.client";

type VoicebankModal =
  | { type: "design"; voicebank: Voicebank }
  | { type: "download"; voicebank: Voicebank; language: "ja" | "en" }
  | null;

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

export function VoicebankList() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [modal, setModal] = useState<VoicebankModal>(null);

  useEffect(() => {
    if (modal?.type !== "design") {
      return;
    }

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [modal]);

  function resetModal() {
    setModal(null);
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
    setModal({
      type: "download",
      voicebank,
      language: getPreferredLanguage(),
    });
  }

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
                  className={`flex shrink-0 flex-row items-center space-x-2 sm:space-x-0 md:space-x-4 ${
                    voicebank.design
                      ? ""
                      : "w-full justify-center sm:w-auto sm:justify-start"
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
                    className="h-auto w-1/2 object-contain md:w-56 md:shrink-0"
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
                    className={`flex w-full flex-col items-stretch justify-center gap-2 sm:flex-row md:gap-4 ${
                      voicebank.id === "COEIROINK" ? "sm:justify-center" : ""
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

                    {voicebank.id === "COEIROINK" ? (
                      <Link
                        href="/maita/coeiroink/"
                        className="flex w-full items-center justify-center rounded-lg border-2 border-maita-purple bg-white px-4 py-2.5 text-sm font-bold text-maita-purple! transition-colors hover:bg-gray-50 sm:w-[calc((100%-0.5rem)/2)] sm:py-3 md:w-[calc((100%-1rem)/2)] md:px-6 md:text-base"
                      >
                        <BookOpenIcon className="mr-1.5 size-5 sm:mr-2" />
                        導入方法を見る
                      </Link>
                    ) : null}

                    {voicebank.id !== "COEIROINK" ? (
                      <button
                        type="button"
                        onClick={() => openDownload(voicebank)}
                        className="flex flex-1 items-center justify-center rounded-lg border-2 border-transparent bg-maita-purple px-4 py-2.5 text-sm font-bold text-white! transition-colors hover:bg-maita-purple-hover sm:py-3 md:px-6 md:text-base"
                      >
                        <DownloadIcon className="mr-1.5 size-5 sm:mr-2" />
                        ダウンロード
                      </button>
                    ) : null}
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

      {modal?.type === "download" ? (
        <TermsDownloadDialog
          itemName={modal.voicebank.name}
          downloadUrl={modal.voicebank.downloadUrl}
          language={modal.language}
          isOpen
          onClose={resetModal}
        />
      ) : null}

      {modal?.type === "design" ? (
        <dialog
          ref={dialogRef}
          aria-modal="true"
          aria-labelledby="design-dialog-title"
          className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-6xl bg-transparent p-0 text-black backdrop:bg-black/70"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
          onClose={resetModal}
        >
          {modal.voicebank.design ? (
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
