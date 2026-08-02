import { AmuIllustration } from "./amu-illustration";

export function CommunitySection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-10 py-10 tracking-wider"
      aria-labelledby="community-title"
    >
      <div
        className="pointer-events-none absolute top-12 z-0 hidden w-44 origin-top rotate-6 xl:block 2xl:w-52"
        style={{
          left: "min(calc(100% - 11rem - 0.75rem), calc(50% + 29rem))",
        }}
        aria-hidden="true"
      >
        <AmuIllustration
          src="/images/illustrations/amu/si-e.webp"
          alt=""
          imageClassName="max-h-52 w-full 2xl:max-h-60"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl text-left">
        <h2
          id="community-title"
          className="text-2xl font-bold sm:text-3xl md:text-4xl"
        >
          Arpeggioにはどんな人がいるの？？
        </h2>
        <p className="mt-5 text-base sm:text-lg md:text-xl">
          Arpeggioはとにかく面白い人や歌が上手な人、神絵師さんなど、個性豊かな人たちがたくさんいます
        </p>
      </div>

      <div
        className="pointer-events-none mt-6 flex w-full justify-center px-2 xl:hidden"
        aria-hidden="true"
      >
        <AmuIllustration
          src="/images/illustrations/amu/si-e.webp"
          alt=""
          frameClassName="rotate-6 origin-top"
          imageClassName="max-h-44 w-40 sm:max-h-48 sm:w-44"
        />
      </div>

      <div className="relative z-10 mt-10 flex w-full max-w-4xl flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <a
          href="https://note.com/arpeggiovocaloid/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border-2 border-transparent px-4 py-2 text-lg text-miku-blue transition-colors duration-200 hover:border-miku-pink sm:px-5 sm:py-3 sm:text-xl md:px-6 md:text-2xl"
        >
          noteブログ
        </a>
        <a
          href="http://arpeggiod.blog90.fc2.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border-2 border-transparent px-4 py-2 text-lg text-miku-blue transition-colors duration-200 hover:border-miku-pink sm:px-5 sm:py-3 sm:text-xl md:px-6 md:text-2xl"
        >
          fc2ブログ
        </a>
      </div>
    </section>
  );
}
