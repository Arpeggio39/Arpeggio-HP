import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";

import { MaitaIntroduction } from "./_components/maita-introduction";
import { MaitaHero } from "./_components/maita-hero";
import { VoicebankList } from "./_components/voicebank-list.client";

export const metadata: Metadata = {
  title: "琵音マイタ",
  description:
    "Arpeggioのキャラクター、琵音マイタのプロフィールとUTAU音源を紹介します。",
};

export default function MaitaPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <MaitaHero />
        <MaitaIntroduction />

        <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-8 tracking-wider text-black sm:px-7 sm:py-10">
          <VoicebankList />

          <div className="mx-auto mt-6 w-full max-w-4xl px-4 text-left sm:mt-8 sm:px-0">
            <h2 className="mb-3 text-2xl font-semibold sm:mb-4 sm:text-3xl">
              UTAUとは？
            </h2>
            <p className="mb-4 text-sm leading-relaxed sm:text-base md:text-xl">
              飴屋／菖蒲（あめや・あやめ）氏制作の、歌声合成ソフトウェアです。
              配布されている数多の音声ライブラリを導入することでお好みの音声で歌唱を作成することが出来ます。
              VOCALOIDではありません。基本的にフリーソフトです。
              当サイトで配布している音声ライブラリだけでは歌えませんので、こちらもDL下さい。
            </p>

            <a
              href="https://utau2008.xrea.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-maita-purple px-5 py-2.5 text-base font-semibold text-white! transition-colors hover:bg-maita-purple-hover sm:px-6 sm:py-3 sm:text-lg"
            >
              UTAU公式サイトを見る
            </a>
          </div>
        </div>
      </main>
      <SiteFooter variant="light" />
    </>
  );
}
