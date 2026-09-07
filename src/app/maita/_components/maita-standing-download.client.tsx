"use client";

import { useState } from "react";

import { DownloadIcon } from "@/components/ui/icons";
import { standingArtDownload } from "@/data/maita";

import styles from "./maita-introduction.module.css";
import {
  getPreferredLanguage,
  TermsDownloadDialog,
} from "./terms-download-dialog.client";

export function MaitaStandingDownload() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  function openDownload() {
    setLanguage(getPreferredLanguage());
    setIsDialogOpen(true);
  }

  return (
    <>
      <p className={styles.credit}>Illustration by GA-CHAN</p>
      <div className={styles.downloadRow}>
        <span className={styles.downloadButtonShell}>
          <button
            type="button"
            onClick={openDownload}
            className={styles.downloadButton}
          >
            <DownloadIcon className={styles.downloadIcon} aria-hidden="true" />
            立ち絵をダウンロード
          </button>
        </span>
      </div>

      <TermsDownloadDialog
        itemName={standingArtDownload.name}
        downloadUrl={standingArtDownload.downloadUrl}
        language={language}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
