import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";

import { CoeiroinkGuideContent } from "./_components/coeiroink-guide-content.client";

export const metadata: Metadata = {
  title: "COEIROINK 導入ガイド",
  description:
    "琵音マイタの COEIROINK 音源をインストールして使うための、初心者向け導入ガイドです。",
};

export default function CoeiroinkGuidePage() {
  return (
    <>
      <SiteHeader />
      <CoeiroinkGuideContent />
      <SiteFooter variant="light" />
    </>
  );
}
