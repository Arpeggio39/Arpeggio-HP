"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import styles from "./maita.module.css";

const VOICE_NAMES = [
  { name: "Capella", className: "text-yellow-100" },
  { name: "Antares", className: "text-red-300" },
  { name: "Sirius", className: "text-blue-300" },
  { name: "Polaris", className: "text-white" },
] as const;

export function MaitaHero() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (window.location.hash || window.scrollY > 8 || reducedMotion.matches)
      return;

    let frame = 0;
    // Polaris starts appearing at 1.2 seconds. Ease into the scroll with it.
    const timer = window.setTimeout(() => {
      if (
        document.hidden ||
        window.location.hash ||
        reducedMotion.matches ||
        window.scrollY > 8
      )
        return;
      const target = document.querySelector(
        '[aria-labelledby="maita-introduction"]',
      );
      if (!target) return;
      window.removeEventListener("scroll", cancel);
      const startY = window.scrollY;
      const distance = target.getBoundingClientRect().top;
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / 1800, 1);
        const eased = (1 - Math.cos(Math.PI * progress)) / 2;
        window.scrollTo({
          top: startY + distance * eased,
          behavior: "instant",
        });
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    }, 1200);
    const cancel = () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
    const cancelOnKey = (event: KeyboardEvent) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Home",
          "End",
          " ",
          "Tab",
        ].includes(event.key)
      )
        cancel();
    };
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("pointerdown", cancel);
    window.addEventListener("scroll", cancel, { passive: true });
    window.addEventListener("keydown", cancelOnKey);
    document.addEventListener("visibilitychange", cancel);
    reducedMotion.addEventListener("change", cancel);
    return () => {
      cancel();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("pointerdown", cancel);
      window.removeEventListener("scroll", cancel);
      window.removeEventListener("keydown", cancelOnKey);
      document.removeEventListener("visibilitychange", cancel);
      reducedMotion.removeEventListener("change", cancel);
    };
  }, []);

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center bg-black tracking-display text-white">
      <h1 className="sr-only">琵音マイタ</h1>
      <div className="relative flex min-h-svh max-w-4xl flex-col items-center justify-center py-28 tracking-display text-white">
        <Image
          src="/images/maita/logo.png"
          alt="琵音マイタのロゴ"
          width={1749}
          height={497}
          loading="eager"
          className={`${styles.logo} h-auto w-[70%]`}
        />

        <div className="flex flex-col items-center justify-center space-y-6">
          {VOICE_NAMES.map((voice) => (
            <p
              key={voice.name}
              className={`${styles.voiceName} ${voice.className} mt-2 text-2xl font-light md:text-4xl`}
            >
              - {voice.name}
            </p>
          ))}
        </div>

        <p className={`${styles.scrollGuide} absolute bottom-24 text-lg`}>
          ↓下にスクロール↓
        </p>
      </div>

      <div
        className={`${styles.anniversaryButton} fixed bottom-4 left-1/2 z-40 -translate-x-1/2`}
      >
        <div className="animate-bounce-jitter">
          <Link
            href="/maita/5th/"
            aria-label="5周年ページを開く"
            className="flex w-72 items-center justify-center space-x-3 rounded-full bg-gradient-to-r from-miku-blue to-maita-purple px-6 py-2 text-xs font-bold text-white! shadow-md transition-transform duration-500 hover:scale-105 active:scale-95 md:w-auto md:space-x-4 md:px-20 md:text-2xl"
          >
            <Image
              src="/images/maita/anniversary/icon.webp"
              alt="5周年ロゴ"
              width={56}
              height={56}
              className="size-10 md:size-14"
            />
            <span>5周年ページはこちら！</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
