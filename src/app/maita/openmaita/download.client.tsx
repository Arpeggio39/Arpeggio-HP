"use client";

import { useRef, useState, type MouseEvent } from "react";

import { coeiroinkDownloads } from "@/data/coeiroink-guide";

import styles from "./page.module.css";

type Release = {
  assets: { name: string; browser_download_url: string }[];
};

const releasesUrl = `${coeiroinkDownloads.releasesPage}/latest`;
const latestReleaseApi =
  "https://api.github.com/repos/Arpeggio39/MaitaCOEIROINK/releases/latest";
const downloadPrefix =
  "https://github.com/Arpeggio39/MaitaCOEIROINK/releases/download/";

export function OpenMaitaDownload({ label }: { label: string }) {
  const pending = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function download(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (pending.current) return;

    pending.current = true;
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(latestReleaseApi, {
        cache: "no-store",
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) throw new Error("Could not load the latest release");

      const release = (await response.json()) as Release;
      const installer = release.assets.find((asset) =>
        /^OpenMaita-Setup-[\d.]+\.exe$/i.test(asset.name),
      );
      if (!installer?.browser_download_url.startsWith(downloadPrefix)) {
        throw new Error("Windows installer not found");
      }

      window.location.assign(installer.browser_download_url);
    } catch {
      setHasError(true);
    } finally {
      pending.current = false;
      setIsLoading(false);
    }
  }

  return (
    <>
      <a
        href={releasesUrl}
        onClick={download}
        className={styles.primary}
        aria-busy={isLoading}
        aria-disabled={isLoading}
      >
        {isLoading ? "最新版を確認中…" : label}
        <span aria-hidden="true">↓</span>
      </a>
      {hasError ? (
        <p className={styles.downloadError} role="alert">
          最新版を確認できませんでした。もう一度お試しいただくか、
          <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
            リリースページ
          </a>
          からダウンロードしてください。
        </p>
      ) : null}
    </>
  );
}
