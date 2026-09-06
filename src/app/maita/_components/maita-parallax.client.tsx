"use client";

import { useEffect, useRef, type ReactNode } from "react";

import styles from "./maita-introduction.module.css";

export function MaitaParallax({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frame = 0;
    let visible = false;

    const update = () => {
      frame = 0;
      if (motionPreference.matches) {
        section.style.setProperty("--scroll-offset", "0px");
        return;
      }
      const rect = section.getBoundingClientRect();
      const distance = window.innerHeight / 2 - (rect.top + rect.height / 2);
      // Bound the travel while allowing the layers to pass the section edges.
      const offset = Math.max(-400, Math.min(400, distance));
      section.style.setProperty("--scroll-offset", `${offset}px`);
    };

    const schedule = () => {
      if (visible && !frame) frame = window.requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    observer.observe(section);
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(section);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motionPreference.addEventListener("change", update);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motionPreference.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="maita-introduction"
    >
      {children}
    </section>
  );
}
