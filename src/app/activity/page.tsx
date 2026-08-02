import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import { groups } from "@/data/groups";

export const metadata: Metadata = {
  title: "活動内容",
  description:
    "同志社大学VOCALOID研究会Arpeggioの8つの活動チームを紹介します。",
};

export default function ActivityPage() {
  return (
    <div className="bg-miku-yellow">
      <SiteHeader />
      <main id="main-content" className="bg-white text-miku-black">
        <header className="flex flex-col items-center tracking-display">
          <h1 className="mt-32 text-5xl font-bold">活動内容</h1>
        </header>

        <section
          className="flex flex-col items-center justify-center pt-10 tracking-wide"
          aria-labelledby="activity-groups-title"
        >
          <h2 id="activity-groups-title" className="mb-10 text-xl font-bold">
            Arpeggioでは8つのチームで活動しています！
          </h2>

          {groups.map((group) => (
            <article key={group.id} className="mb-20 w-5/6 max-w-6xl p-6">
              <h3 className="mb-4 text-4xl font-bold content:text-6xl">
                {group.name}
              </h3>
              <p className="text-lg text-miku-black">{group.description}</p>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter variant="light" />
    </div>
  );
}
