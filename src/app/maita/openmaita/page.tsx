import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";

import { OpenMaitaDownload } from "./download.client";
import styles from "./page.module.css";
import { Reveal } from "./reveal.client";

const title = "OpenMaita | 琵音マイタの音声・動画作成アプリ";
const description =
  "OpenMaitaは、COEIROINKと連携して琵音マイタの音声を作成できるWindowsアプリです。読み上げの調整やWAV保存、モーショントラッキングなしでのLive2D動画の書き出しに対応しています。";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  alternates: { canonical: "/maita/openmaita/" },
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/images/maita/openmaita/editor-v1.11.0.webp",
        width: 1280,
        height: 768,
      },
    ],
  },
};

export default function OpenMaitaPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="openmaita-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 id="openmaita-title" className={styles.wordmark}>
                Open<span>Maita</span>
                <span className={styles.dot}>.</span>
              </h1>
              <p className={styles.tagline}>
                マイタの音声と
                <br />
                動画を作成
              </p>
              <p className={styles.heroDescription}>
                COEIROINKと連携して、入力した文章をマイタの声で読み上げます。
                <br />
                音声の調整や保存、Live2D動画の書き出しができます。
              </p>
              <div className={styles.actions}>
                <OpenMaitaDownload label="最新版をダウンロード" />
                <a href="#features" className={styles.textLink}>
                  できることを見る <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className={styles.requirement}>Windows向けアプリ</p>
            </div>
            <div className={styles.heroArt}>
              <span className={styles.artRing} aria-hidden="true" />
              <Image
                src="/images/maita/standing/01-default.png"
                alt="琵音マイタの立ち絵"
                width={800}
                height={1200}
                preload
                sizes="(min-width: 900px) 540px, 80vw"
                className={styles.portrait}
              />
            </div>
          </div>
        </section>

        <section
          id="features"
          className={styles.section}
          aria-labelledby="features-title"
        >
          <Reveal className={styles.sectionHeading}>
            <div>
              <h2 id="features-title">音声の作成・調整</h2>
            </div>
            <p>
              文章を入力して、読み上げを確認。
              <br />
              同じ画面で話し方を調整できます。
            </p>
          </Reveal>
          <Reveal>
            <figure className={styles.appFigure}>
              <div className={styles.windowBar}>
                <span aria-hidden="true">● ● ●</span>
                <span>OpenMaita</span>
                <span>編集画面</span>
              </div>
              <Image
                src="/images/maita/openmaita/editor-v1.11.0.webp"
                alt="OpenMaita v1.11.0の編集画面。マイタの紹介文を入力した台本エディター。"
                width={1280}
                height={768}
                sizes="(min-width: 1200px) 1120px, 90vw"
                className={styles.appImage}
              />
            </figure>
          </Reveal>
          <div className={styles.features}>
            <Reveal>
              <span className={styles.number}>01</span>
              <h3>文章の入力・再生</h3>
              <p>
                入力した文章を読み上げます。選択した部分だけを再生して、読み方を確認できます。
              </p>
            </Reveal>
            <Reveal className={styles.revealDelayShort}>
              <span className={styles.number}>02</span>
              <h3>読み上げの調整</h3>
              <p>
                話す速さ、声の高さ、イントネーションを調整できます。言葉ごとの調整にも対応しています。
              </p>
            </Reveal>
            <Reveal className={styles.revealDelayLong}>
              <span className={styles.number}>03</span>
              <h3>WAVで保存</h3>
              <p>
                全文をまとめて、または区切りごとにWAVで保存できます。動画のナレーションやセリフに使えます。
              </p>
            </Reveal>
          </div>
        </section>

        <section className={styles.liveSection} aria-labelledby="live2d-title">
          <div className={styles.liveInner}>
            <Reveal className={styles.liveVisual}>
              <video
                controls
                playsInline
                preload="none"
                poster="/images/maita/openmaita/live2d-v1.11.0-poster.webp"
                className={styles.video}
                aria-label="マイタのLive2D口パク動画の出力サンプル"
              >
                <source
                  src="/images/maita/openmaita/live2d-v1.11.0-voice.webm"
                  type="video/webm"
                />
                <source
                  src="/images/maita/openmaita/live2d-v1.11.0-voice.mp4"
                  type="video/mp4"
                />
              </video>
            </Reveal>
            <Reveal className={`${styles.liveCopy} ${styles.revealDelayShort}`}>
              <span className={styles.badge}>Live2D連携</span>
              <h2 id="live2d-title">Live2D動画の作成</h2>
              <p>
                モーショントラッキングなしで、マイタのLive2Dモデルを動かせます。
                <br />
                文章と音声に合わせて口パクや身振りを自動で付け、音声付きの動画を書き出せます。
              </p>
              <ul className={styles.liveList}>
                <li>音声付きMP4で保存</li>
                <li>グリーンバックで書き出し、編集ソフトで合成可能</li>
                <li>収録したモーションの読み込みにも対応</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section
          id="download"
          className={`${styles.section} ${styles.download}`}
          aria-labelledby="download-title"
        >
          <Reveal>
            <h2 id="download-title">ダウンロード</h2>
            <p className={styles.downloadIntro}>
              最新版のWindows用インストーラーをダウンロードできます。
            </p>
            <OpenMaitaDownload label="OpenMaitaをダウンロード" />
            <p className={styles.downloadNote}>Windows向け</p>
            <div className={styles.downloadLinks}>
              <Link href="/maita/coeiroink/">
                はじめての方へ：導入ガイド <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/maita/term/">
                マイタの利用規約 <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <Link href="/maita/" className={styles.backLink}>
              ← 琵音マイタについて
            </Link>
          </Reveal>
        </section>
      </main>
      <SiteFooter variant="light" />
    </>
  );
}
