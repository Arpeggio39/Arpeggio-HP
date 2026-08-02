import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";

import { TermsContent } from "./_components/terms-content.client";

export const metadata: Metadata = {
  title: "琵音マイタ 利用規約",
  description: "琵音マイタの音源・キャラクターを利用する際の規約です。",
};

export default function MaitaTermsPage() {
  return (
    <div className="bg-miku-yellow">
      <SiteHeader />
      <TermsContent />
      <SiteFooter variant="light" />
    </div>
  );
}
