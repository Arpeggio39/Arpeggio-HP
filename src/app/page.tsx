import type { Metadata } from "next";

import { CommunitySection } from "@/app/_components/home/community-section";
import { ContactSection } from "@/app/_components/home/contact-section";
import { GroupOverview } from "@/app/_components/home/group-overview";
import { HomeHero } from "@/app/_components/home/home-hero";
import { MaitaHighlight } from "@/app/_components/home/maita-highlight";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import { SITE_DESCRIPTION } from "@/data/site";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <main id="main-content">
        <HomeHero />
        <GroupOverview />
        <MaitaHighlight />
        <CommunitySection />
        <ContactSection />
      </main>
      <SiteFooter variant="light" />
    </div>
  );
}
