import Link from "next/link";

import { groups } from "@/data/groups";

import { AmuIllustration } from "./amu-illustration";

export function GroupOverview() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-12 pt-4 pb-10 tracking-wider"
      aria-labelledby="group-overview-title"
    >
      <div
        className="pointer-events-none absolute top-16 z-0 hidden w-44 origin-top -rotate-6 xl:block 2xl:w-52"
        style={{ left: "max(0.75rem, calc(50% - 43rem))" }}
        aria-hidden="true"
      >
        <AmuIllustration
          src="/images/illustrations/amu/roki.webp"
          alt=""
          preload
          imageClassName="max-h-52 w-full 2xl:max-h-60"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl text-left">
        <h2
          id="group-overview-title"
          className="text-2xl font-bold sm:text-3xl md:text-4xl"
        >
          Arpeggioって何をするサークル？
        </h2>
        <p className="mt-10 text-base sm:text-lg md:text-xl">
          ArpeggioはVOCALOIDをはじめ合成音声に関する創作活動をしているサークルです！
        </p>
        <p className="mt-3 mb-10 text-base sm:text-lg md:text-xl">
          以下の8個の班に分かれて活動しています！
        </p>
      </div>

      <div
        className="pointer-events-none mt-2 flex w-full justify-center px-2 xl:hidden"
        aria-hidden="true"
      >
        <AmuIllustration
          src="/images/illustrations/amu/roki.webp"
          alt=""
          preload
          frameClassName="-rotate-6 origin-top"
          imageClassName="max-h-44 w-40 sm:max-h-48 sm:w-44"
        />
      </div>

      <div className="relative z-10 mt-5 grid w-full max-w-2xl grid-cols-1 gap-6">
        {groups.map((group) => (
          <article
            key={group.id}
            className="relative min-h-[120px] border-2 border-black"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 88% 0, 0 0)",
              backgroundColor: "rgb(249 250 251)",
            }}
          >
            <div className="relative p-5 pr-24">
              <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
                {group.name}
              </h3>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="line-clamp-2 min-w-0 flex-1 text-sm text-gray-600 sm:line-clamp-1">
                  {group.description}
                </p>
                <Link
                  href="/activity"
                  className="self-end rounded-md bg-miku-blue px-3 py-2 text-sm font-semibold text-white! transition-colors duration-200 hover:bg-miku-pink sm:self-auto sm:text-base"
                >
                  詳しく見る
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/activity"
        className="relative z-10 mt-10 rounded-lg bg-miku-blue px-6 py-3 text-lg font-semibold text-white! transition-colors duration-200 hover:bg-miku-pink sm:px-8 sm:py-4 sm:text-xl md:px-10 md:text-2xl"
      >
        各班の活動内容を見る
      </Link>
    </section>
  );
}
