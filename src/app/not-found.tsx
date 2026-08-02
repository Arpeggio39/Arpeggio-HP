import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-miku-cyan text-miku-black">
      <SiteHeader />
      <main
        id="main-content"
        className="flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center tracking-wider"
      >
        <p className="text-xl font-semibold text-miku-pink">404</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          ページが見つかりません
        </h1>
        <p className="mt-6 max-w-xl text-lg">
          URLが正しいか確認するか、トップページから目的のページを探してください。
        </p>
        <Link
          href="/"
          className="mt-10 rounded-lg bg-miku-blue px-6 py-3 font-semibold text-white! transition-colors hover:bg-miku-pink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-miku-pink"
        >
          トップページへ戻る
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
