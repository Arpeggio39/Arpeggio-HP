import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";

import { AlbumCatalog } from "./_components/album-catalog";

export const metadata: Metadata = {
  title: "Album",
  description: "同志社VOCALOID研究会Arpeggioが制作したアルバムを紹介します。",
};

export default function AlbumPage() {
  return (
    <div className="bg-miku-cyan">
      <SiteHeader />

      <main id="main-content" className="bg-miku-cyan">
        <div className="flex flex-col items-center bg-miku-cyan tracking-display text-miku-black">
          <h1
            id="album-page-title"
            className="mt-32 animate-fade-in-down text-6xl font-bold"
          >
            Album
          </h1>
        </div>

        <AlbumCatalog />
      </main>

      <SiteFooter variant="cyan" />
    </div>
  );
}
