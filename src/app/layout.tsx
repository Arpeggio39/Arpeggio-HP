import "./globals.css";

import type { Metadata } from "next";

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/images/brand/favicon-64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[10000] -translate-y-20 rounded-md bg-black px-4 py-2 text-white transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-black"
        >
          本文へ移動
        </a>
        {children}
      </body>
    </html>
  );
}
