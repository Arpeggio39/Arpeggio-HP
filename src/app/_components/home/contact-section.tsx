import { AmuIllustration } from "./amu-illustration";

export function ContactSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-10 py-10 tracking-wider"
      aria-labelledby="contact-title"
    >
      <div
        className="pointer-events-none absolute top-14 z-0 hidden w-44 origin-top -rotate-[8deg] xl:block 2xl:w-52"
        style={{ left: "max(0.75rem, calc(50% - 43rem))" }}
        aria-hidden="true"
      >
        <AmuIllustration
          src="/images/illustrations/amu/hatsune.webp"
          alt=""
          imageClassName="max-h-52 w-full 2xl:max-h-60"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl text-left">
        <h2
          id="contact-title"
          className="text-2xl font-bold sm:text-3xl md:text-4xl"
        >
          Arpeggioに興味がある！
        </h2>
        <p className="mt-5 text-base sm:text-lg md:text-xl">
          Arpeggioの活動詳細やコンタクトはXから受け付けています。ぜひDMにてご連絡ください！
        </p>
      </div>

      <div
        className="pointer-events-none mt-6 flex w-full justify-center px-2 xl:hidden"
        aria-hidden="true"
      >
        <AmuIllustration
          src="/images/illustrations/amu/hatsune.webp"
          alt=""
          frameClassName="-rotate-[8deg] origin-top"
          imageClassName="max-h-44 w-40 sm:max-h-48 sm:w-44"
        />
      </div>

      <div className="relative z-10 mt-10 flex w-full max-w-4xl flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <a
          href="https://twitter.com/arpeggio_kouhou"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-black px-4 py-2 text-lg text-white! transition-colors duration-200 sm:px-5 sm:py-3 sm:text-xl md:px-6 md:text-2xl"
        >
          Xを見る
        </a>
      </div>
    </section>
  );
}
