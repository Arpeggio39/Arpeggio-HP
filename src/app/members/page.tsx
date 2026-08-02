import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import { directoryMembers } from "@/data/members";

export const metadata: Metadata = {
  title: "メンバー",
  description: "個性豊かなArpeggioメンバーをご紹介します。",
};

export default function MembersPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="min-h-screen bg-black text-white">
        <div className="flex flex-col items-center justify-center py-20 tracking-display">
          <h1
            className="animate-fade-in-up text-center text-xl font-bold md:text-3xl"
            style={{ animationDelay: "100ms" }}
          >
            Arpeggio メンバー
          </h1>
          <p className="mx-10 mt-8 text-center text-xl">
            個性豊かなArpeggioメンバーをご紹介します
          </p>
        </div>

        <div className="mx-12 flex flex-col items-center justify-center pb-20 tracking-wider">
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {directoryMembers.map((member, index) => (
              <Link
                key={member.id}
                href={`/members/${member.id}/`}
                className="block rounded-lg border border-miku-blue bg-transparent p-6 text-white transition-transform hover:scale-105 hover:border-miku-pink"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-miku-blue">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={128}
                      height={128}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h2 className="mb-2 text-2xl font-semibold">{member.name}</h2>
                  <p className="mb-3 text-lg text-miku-blue">
                    {member.directoryRole}
                  </p>
                  <p className="text-sm leading-relaxed">{member.summary}</p>
                  <div className="mt-4 text-sm font-semibold text-miku-blue">
                    詳細を見る →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter variant="dark" />
    </>
  );
}
