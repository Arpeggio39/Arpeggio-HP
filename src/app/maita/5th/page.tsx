import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import { anniversaryProjects } from "@/data/anniversary";

import { AnniversarySplash } from "./_components/anniversary-splash.client";

export const metadata: Metadata = {
  title: "琵音マイタ 5th Anniversary",
  description: "琵音マイタ5周年記念プロジェクトをご紹介します。",
};

const COMING_SOON_CARDS = ["coming-soon-1", "coming-soon-2"] as const;

export default function FifthAnniversaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
      <AnniversarySplash />
      <SiteHeader />

      <main id="main-content" className="px-4 pt-32 pb-8 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-16">
            <Image
              src="/images/maita/anniversary/header.webp"
              alt="5th Anniversary Logo"
              width={1500}
              height={500}
              loading="eager"
              className="mx-auto h-auto w-full max-w-xs drop-shadow-2xl sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
            />
          </div>

          <section className="mx-auto mb-8 max-w-4xl sm:mb-16">
            <h1 className="mb-4 text-center text-2xl font-semibold tracking-widest sm:mb-6 sm:text-3xl md:text-4xl">
              PROJECT
            </h1>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {anniversaryProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/maita/5th/projects/${project.id}/`}
                  className="block"
                >
                  <article className="overflow-hidden rounded-xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                    <div className="relative aspect-square">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 1024px) 267px, 50vw"
                        className="object-cover p-8"
                      />
                    </div>
                    <div className="p-2 sm:p-3">
                      <p className="text-xs text-gray-600 sm:text-sm">
                        {project.date}
                      </p>
                      <h2 className="mb-1 text-sm font-bold text-gray-800 sm:text-base">
                        {project.title}
                      </h2>
                    </div>
                  </article>
                </Link>
              ))}

              {COMING_SOON_CARDS.map((cardId) => (
                <div
                  key={cardId}
                  className="overflow-hidden rounded-xl bg-gray-200 shadow-xl"
                >
                  <div className="relative flex aspect-square items-center justify-center">
                    <p className="text-center text-sm font-medium text-gray-500 sm:text-lg">
                      Coming Soon...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter variant="light" className="bg-transparent! text-gray-800!" />
    </div>
  );
}
