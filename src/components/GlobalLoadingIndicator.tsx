"use client";

import { useInitialLoad } from "@/contexts/InitialLoadContext";

/**
 * 本当の初回ロード時のみ表示するトップのプログレスインジケーター。
 * クライアント側のページ遷移では表示しない。
 */
export default function GlobalLoadingIndicator() {
  const { isInitialLoad } = useInitialLoad();

  if (!isInitialLoad) return null;

  return (
    <div
      className="global-loading-indicator"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={undefined}
      aria-label="読み込み中"
    />
  );
}
