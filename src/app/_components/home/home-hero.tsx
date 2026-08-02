import Image from "next/image";

import { ScrollHint } from "@/components/ui/scroll-hint.client";

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center py-20 tracking-display">
      <h1 className="mt-4 animate-fade-in-up text-center text-lg font-bold text-black opacity-0 sm:text-2xl md:text-4xl">
        同志社大学VOCALOID研究会
      </h1>

      <div
        className="flex animate-fade-in-up items-center justify-center opacity-0"
        style={{ animationDelay: "0.5s" }}
      >
        <Image
          src="/images/brand/arpeggio-mark.webp"
          alt="Arpeggio Logo"
          width={100}
          height={100}
          className="mt-4 mr-4 object-contain"
          preload
        />
        <p className="mt-4 text-center text-4xl font-bold text-black">
          Arpeggio
        </p>
      </div>

      <ScrollHint className="text-sm text-gray-600 sm:text-lg" />
    </section>
  );
}
