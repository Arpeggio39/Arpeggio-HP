import Image from "next/image";
import Link from "next/link";

export function MaitaHighlight() {
  return (
    <section
      className="flex flex-col items-center justify-center px-10 py-10 tracking-wider"
      aria-labelledby="maita-highlight-title"
    >
      <div className="w-full max-w-5xl px-6 py-8 sm:px-8 md:px-10 md:py-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
          <div className="flex w-full justify-center md:w-[32%]">
            <Image
              src="/images/maita/shared/portrait.webp"
              alt="琵音マイタの立ち絵"
              width={1130}
              height={1600}
              className="h-auto w-40 object-contain sm:w-52 md:w-full"
            />
          </div>
          <div className="w-full text-left md:flex-1">
            <h2
              id="maita-highlight-title"
              className="text-2xl font-bold sm:text-3xl md:text-4xl"
            >
              琵音マイタ
            </h2>
            <p className="mt-5 text-base leading-relaxed sm:text-lg md:text-xl">
              琵音マイタは、Arpeggioの創立10周年記念プロジェクトで生まれたキャラクターです。
            </p>
            <p className="mt-3 text-base leading-relaxed sm:text-lg md:text-xl">
              音楽と創作が大好きな元気いっぱいのメンバーとして親しまれています。詳しいプロフィールやビジュアルは、マイタページで紹介しています。
            </p>
            <Link
              href="/maita"
              className="mt-6 inline-block rounded-lg bg-maita-purple px-5 py-3 text-base font-semibold text-white! transition-colors duration-200 hover:bg-maita-purple-hover sm:px-6 sm:text-lg"
            >
              琵音マイタをもっと見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
