import type { Metadata } from "next";
import Link from "next/link";

import { ScrollHint } from "@/components/ui/scroll-hint.client";

import { PostFestivalHeader } from "./_components/post-festival-header.client";

export const metadata: Metadata = {
  title: "Arpeggio投稿祭",
  description: "同志社大学VOCALOID研究会Arpeggioの投稿祭ページです。",
};

export default function PostFestivalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PostFestivalHeader />
      <main id="main-content">
        <ScrollHint className="text-lg text-white" />
        <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6 py-20 tracking-display text-white">
          <h1 className="animate-fade-in-up text-center text-5xl font-bold sm:text-6xl md:text-8xl">
            Arpeggio投稿祭
          </h1>
          <p className="mt-10 animate-fade-in-up text-center text-xl font-light sm:text-2xl">
            同志社VOCALOID研究会
          </p>
        </section>

        <section className="flex flex-col items-center justify-center bg-black px-6 pb-10 text-center tracking-wider text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Arpeggioって何をするサークル？
          </h2>
          <p className="mt-5 max-w-5xl text-lg sm:text-xl">
            ArpeggioはVOCALOIDをはじめ、イラストや映像、ダンスなどの様々な創作活動を制作しているサークルです
          </p>
          <Link
            href="/album"
            className="mt-10 rounded-lg bg-miku-blue px-6 py-3 text-white! transition-colors hover:bg-miku-pink"
          >
            Arpeggioの過去の作品一覧はこちら
          </Link>
        </section>

        <section className="flex flex-col items-center justify-center bg-black px-6 py-10 text-center tracking-wider text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Arpeggioにはどんな人がいるの？？
          </h2>
          <p className="mt-5 max-w-5xl text-lg sm:text-xl">
            Arpeggioはとにかく面白い人や歌が上手な人、神絵師さんなど、個性豊かな人たちがたくさんいます
          </p>
          <div className="mt-10 flex space-x-4">
            <a
              href="https://note.com/arpeggiovocaloid/n/ndd0cf9f50ba5"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-miku-blue px-6 py-3 text-white! transition-colors hover:bg-miku-pink"
            >
              noteブログ
            </a>
            <a
              href="http://arpeggiod.blog90.fc2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-miku-blue px-6 py-3 text-white! transition-colors hover:bg-miku-pink"
            >
              fc2ブログ
            </a>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center bg-black px-6 py-10 text-center tracking-wider text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Arpeggioに興味がある！
          </h2>
          <p className="mt-5 max-w-5xl text-lg sm:text-xl">
            Arpeggioの活動詳細やコンタクトはXやInstagramから受け付けています。ぜひDMにてご連絡ください！
          </p>
          <div className="mt-10 flex space-x-4">
            <a
              href="https://twitter.com/arpeggio_kouhou"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-miku-blue px-6 py-3 text-white! transition-colors hover:bg-miku-pink"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.instagram.com/arpeggio_kouhou/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-miku-blue px-6 py-3 text-white! transition-colors hover:bg-miku-pink"
            >
              インスタ
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
