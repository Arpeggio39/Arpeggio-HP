"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import styles from "./anniversary.module.css";

function shouldSkipSplash() {
  const value = new URLSearchParams(window.location.search).get("skipSplash");
  return value === "1" || value === "true";
}

function subscribeToNavigation(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getServerSnapshot() {
  return false;
}

export function AnniversarySplash() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const skipSplash = useSyncExternalStore(
    subscribeToNavigation,
    shouldSkipSplash,
    getServerSnapshot,
  );

  useEffect(() => {
    if (skipSplash) {
      return;
    }

    const dialog = dialogRef.current;
    if (dialog) {
      dialog.removeAttribute("open");
      dialog.showModal();
    }

    const timer = window.setTimeout(() => dialog?.close(), 1000);
    return () => window.clearTimeout(timer);
  }, [skipSplash]);

  if (skipSplash || !isVisible) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      open
      aria-label="5周年ページを読み込み中"
      aria-busy="true"
      className="fixed inset-0 z-50 m-0 hidden h-full max-h-none w-full max-w-none items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 p-0 open:flex"
      onClose={() => setIsVisible(false)}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/images/maita/anniversary/icon.webp"
          alt=""
          width={160}
          height={160}
          loading="eager"
          className="mb-4 size-24 sm:mb-6 sm:size-32 md:size-40"
        />
        <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-300 sm:w-64">
          <div className={`${styles.loadingBar} h-full bg-maita-purple`} />
        </div>
      </div>
    </dialog>
  );
}
