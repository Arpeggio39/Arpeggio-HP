"use client";

import { useEffect, useRef, type ReactNode } from "react";

import styles from "./page.module.css";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !element ||
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    )
      return;

    // Keep content already on screen visible, including direct anchor visits.
    if (element.getBoundingClientRect().top < window.innerHeight - 24) return;

    function show() {
      element?.classList.remove(styles.pending);
      observer.disconnect();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show();
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );
    element.classList.add(styles.pending);
    observer.observe(element);
    element.addEventListener("focusin", show);
    reducedMotion.addEventListener("change", show);
    return () => {
      show();
      element.removeEventListener("focusin", show);
      reducedMotion.removeEventListener("change", show);
    };
  }, []);
  return (
    <div ref={ref} className={`${styles.reveal} ${className}`}>
      {children}
    </div>
  );
}
