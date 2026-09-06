import Image from "next/image";

import { maitaProfile } from "@/data/maita";

import styles from "./maita-introduction.module.css";
import { MaitaParallax } from "./maita-parallax.client";

const portrait = "/images/maita/standing/01-default.png";

export function MaitaIntroduction() {
  return (
    <MaitaParallax>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>ARPEGGIO ORIGINAL CHARACTER</p>
          <h2 id="maita-introduction" className={styles.heading}>
            <Image
              src="/images/maita/logo.png"
              alt="琵音マイタ"
              width={1749}
              height={497}
              sizes="(min-width: 900px) 540px, 85vw"
              className={styles.logo}
            />
          </h2>
          <p className={styles.reading}>びおん まいた / Bion Maita</p>
          <div className={styles.description}>
            <p>
              同志社ボカロ研Arpeggioで制作されたオリジナル音源。Arpeggioのメンバーで、髪色はサークルの班の数に合わせている。
            </p>
            <p>全5種のUTAU音源とMYCOEIROINKを公開中！僕と一緒に創作しよ〜！</p>
          </div>
          <dl className={styles.profile}>
            {maitaProfile.map((item) => (
              <div key={item.label} className={styles.profileRow}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className={styles.figure}>
          <Image
            src={portrait}
            alt="琵音マイタの新しい立ち絵。七色のメッシュの黒髪に、黒いトップスと白いスカートを着て微笑んでいる。"
            width={800}
            height={1200}
            sizes="(min-width: 1200px) 640px, (min-width: 900px) 53vw, 90vw"
            className={styles.portrait}
          />
        </figure>
        <p className={styles.credit}>Illustration by GA-CHAN</p>
      </div>
    </MaitaParallax>
  );
}
