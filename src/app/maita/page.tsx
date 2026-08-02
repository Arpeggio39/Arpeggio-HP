import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import { maitaProfile } from "@/data/maita";

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
        <div className="flex flex-col items-center justify-center bg-black pt-10 pb-10 tracking-wider text-white">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl px-4 text-left sm:px-7">
              <h2 className="mt-12 text-2xl font-bold sm:mt-16 sm:text-3xl md:mt-20 md:text-6xl">
                琵音マイタとは？
              </h2>
              <p className="mt-6 text-sm leading-relaxed sm:mt-8 sm:text-base md:mt-10 md:text-xl">
                琵音マイタ(びおん
                まいた)とは同志社大学VOCALOID研究会Arpeggioの創立10周年記念プロジェクトで作成されたキャラクターです。
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-black pt-10 pb-10 tracking-wider text-white">
          <div className="flex w-[91.6667%] max-w-4xl flex-col items-center justify-center gap-6 md:flex-row md:items-start md:gap-8">
            <div className="w-full max-w-[220px] shrink-0 sm:max-w-[260px] md:w-1/2 md:max-w-none">
              <Image
                src="/images/maita/shared/portrait.webp"
                alt="マイタの立ち絵"
                width={1130}
                height={1600}
                sizes="(min-width: 768px) 448px, 260px"
                className="h-auto w-full"
              />
            </div>
            <div className="w-full text-left md:w-1/2">
              <p className="mt-0 text-sm leading-relaxed content:mt-5 sm:text-xs sm:leading-tight md:text-lg md:leading-relaxed">
                音楽が好きで元気いっぱいのArpeggioメンバー。
              </p>
              <p className="mt-2 text-sm leading-relaxed sm:mt-2 sm:text-xs sm:leading-tight md:mt-5 md:text-lg md:leading-relaxed">
                Arpeggioのことが大好きで髪色は班の数に合わせている。
              </p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed sm:mt-2 sm:space-y-1 sm:text-xs sm:leading-tight md:mt-5 md:space-y-3 md:text-lg md:leading-relaxed">
                {maitaProfile.map((profile) => (
                  <li key={profile.label}>
                    {profile.label}: {profile.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

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
