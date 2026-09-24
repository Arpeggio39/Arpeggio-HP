import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import { coeiroinkDownloads } from "@/data/coeiroink-guide";

import styles from "./page.module.css";
import { Reveal } from "./reveal.client";

const title = "OpenMaita — マイタの声で、つくろう。";
const description =
  "琵音マイタのナレーションをつくるWindowsアプリ、OpenMaita。文章の入力から声の調整、Live2Dの口パク動画の書き出しまで。";

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
                マイタの声で、
                <br />
                つくろう。
              </p>
              <p className={styles.heroDescription}>
                COEIROINKと連携して、言葉をマイタの声に。
                <br />
                声も、表情も。あなたの創作にマイタを。
              </p>
              <div className={styles.actions}>
                <a href="#download" className={styles.primary}>
                  ダウンロード <span aria-hidden="true">↓</span>
                </a>
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
          <Reveal>
            <div className={styles.sectionHeading}>
              <div>
                <h2 id="features-title">言葉に、マイタらしさを。</h2>
              </div>
              <p>
                台本を書いて、聞いて、少し整える。
                <br />
                思い描いた話し方を、ひとつの画面で。
              </p>
            </div>
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
            <div className={styles.features}>
              <div>
                <span className={styles.number}>01</span>
                <h3>書いて、聞く。</h3>
                <p>
                  台本を入力して、そのまま再生。選んだ部分だけ聞き直せるから、長い文章も少しずつ仕上げられます。
                </p>
              </div>
              <div>
                <span className={styles.number}>02</span>
                <h3>声のニュアンスを整える。</h3>
                <p>
                  話す速さ、声の高さ、イントネーション。言葉ごとの調整で、届けたい雰囲気に近づけます。
                </p>
              </div>
              <div>
                <span className={styles.number}>03</span>
                <h3>作品へ、書き出す。</h3>
                <p>
                  全文をまとめて、または区切りごとにWAVで保存。動画のナレーションや、作品のセリフに。
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className={styles.liveSection} aria-labelledby="live2d-title">
          <Reveal className={styles.liveInner}>
            <div className={styles.liveVisual}>
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
            </div>
            <div className={styles.liveCopy}>
              <span className={styles.badge}>Live2D連携</span>
              <h2 id="live2d-title">
                声に合わせて、
                <br />
                マイタも動く。
              </h2>
              <p>
                ナレーションができたら、動くマイタも一緒に。
                <br />
                音声に合わせた口パクと、自然な動きを付けた動画を書き出せます。
              </p>
              <ul className={styles.liveList}>
                <li>音声と一緒に、音声付きMP4を保存</li>
                <li>グリーンバックで、編集ソフトでの合成も</li>
                <li>収録したモーションの読み込みにも対応</li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section
          id="download"
          className={`${styles.section} ${styles.download}`}
          aria-labelledby="download-title"
        >
          <Reveal>
            <h2 id="download-title">次の作品を、マイタと。</h2>
            <p className={styles.downloadIntro}>
              あなたの物語に、マイタの声と動きを。
            </p>
            <a
              href={coeiroinkDownloads.releasesPage + "/latest"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              OpenMaitaをダウンロード <span aria-hidden="true">↗</span>
            </a>
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
