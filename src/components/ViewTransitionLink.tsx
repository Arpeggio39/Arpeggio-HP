"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

type ViewTransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** ナビゲーション完了まで待つ最大ミリ秒（新スナップショット用） */
  transitionReadyDelay?: number;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void | Promise<void>) => { ready: Promise<void>; finished: Promise<void> };
};

/**
 * クリック時に View Transitions API でページ遷移するリンク。
 * リスト→詳細で共有要素（view-transition-name）が同じ要素同士がモーフする。
 */
export default function ViewTransitionLink({
  href,
  children,
  className,
  transitionReadyDelay = 100,
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.defaultPrevented || e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const target = e.currentTarget;
      if (target.target || target.getAttribute("rel") === "external") return;

      e.preventDefault();

      const run = () => {
        router.push(href);
        return new Promise<void>((resolve) => setTimeout(resolve, transitionReadyDelay));
      };

      const doc = typeof document !== "undefined" ? (document as DocumentWithViewTransition) : null;
      if (doc?.startViewTransition) {
        doc.startViewTransition(run);
      } else {
        void run();
      }
    },
    [href, router, transitionReadyDelay]
  );

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
