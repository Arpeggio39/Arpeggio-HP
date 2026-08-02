"use client";

import { useEffect, useState } from "react";

type ScrollHintProps = Readonly<{
  className?: string;
}>;

export function ScrollHint({ className = "" }: ScrollHintProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY <= 10);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p
      className={`absolute bottom-10 animate-bounce-pulse transition-opacity duration-500 ${className}`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      ↓下にスクロール↓
    </p>
  );
}
