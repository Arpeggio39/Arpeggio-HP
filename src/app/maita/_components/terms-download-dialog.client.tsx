"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Language = "ja" | "en";

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

export function getPreferredLanguage(): Language {
  const requestedLanguage = new URLSearchParams(window.location.search).get(
    "lang",
  );
  if (requestedLanguage === "ja" || requestedLanguage === "en") {
    return requestedLanguage;
  }

  return window.navigator.language.startsWith("ja") ? "ja" : "en";
}

type TermsDownloadDialogProps = Readonly<{
  itemName: string;
  downloadUrl: string;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}>;

export function TermsDownloadDialog({
  itemName,
  downloadUrl,
  language,
  isOpen,
  onClose,
}: TermsDownloadDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const copy = DOWNLOAD_COPY[language];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [isOpen]);

  function finalizeClose() {
    setIsAgreed(false);
    onClose();
  }

  function handleClose() {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
      return;
    }

    finalizeClose();
  }

  function handleDownload() {
    if (!isAgreed) {
      return;
    }

    window.open(downloadUrl, "_blank", "noopener,noreferrer");
    handleClose();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="download-dialog-title"
      aria-describedby="download-dialog-description"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg bg-transparent p-0 text-black backdrop:bg-black/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
      onClose={finalizeClose}
    >
      <div className="rounded-lg bg-white p-6">
        <h2 id="download-dialog-title" className="mb-4 text-2xl font-bold">
          {copy.title(itemName)}
        </h2>
        <p id="download-dialog-description" className="mb-4">
          {copy.message}
        </p>
        <div className="mb-4 flex items-center">
          <input
            id="terms-agreement"
            type="checkbox"
            className="mr-2"
            checked={isAgreed}
            aria-labelledby="terms-agreement-label"
            onChange={(event) => setIsAgreed(event.target.checked)}
          />
          <span id="terms-agreement-label">
            {copy.agreementPrefix ? (
              <label htmlFor="terms-agreement">{copy.agreementPrefix}</label>
            ) : null}
            <Link
              href={`/maita/term/?lang=${language}`}
              target="_blank"
              className="text-miku-blue underline transition-colors hover:text-miku-pink"
            >
              {copy.agreementLink}
            </Link>
            {copy.agreementSuffix ? (
              <label htmlFor="terms-agreement">{copy.agreementSuffix}</label>
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
            onClick={handleDownload}
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
    </dialog>
  );
}
