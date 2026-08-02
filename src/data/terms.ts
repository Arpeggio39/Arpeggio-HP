export type TermsLanguage = "ja" | "en";

export type TermsDocument = Readonly<{
  title: string;
  subtitle: string;
  sections: readonly Readonly<{
    title: string;
    items: readonly string[];
  }>[];
}>;

export const termsByLanguage = {
  ja: {
    title: "利用規約",
    subtitle: "「琵音マイタ」を使う際は、必ず守ってください。",
    sections: [
      {
        title: "1.禁止事項",
        items: [
          "・公序良俗、良識に反する使用。",
          "・無断での商用利用、政治的利用、宗教的利用、R指定作品への使用。",
          "・過度に政治的、宗教的、下品な発言をするアカウントへの使用。",
          "・他者や他国を侮蔑するための利用。",
          "・原作者・その他関係者に迷惑のかかる使用。",
          "・自作発言/再配布。",
          "・イラスト製作者以外が公式立ち絵をSNS等のアイコンにする行為。",
          "・立ち絵や関連イラストのトレース行為。",
          "・本規約に反した行為。",
        ],
      },
      {
        title: "2.禁止事項を遵守した上での許諾事項",
        items: [
          "・個人で楽しむ範囲の声の加工。(配布は禁止)",
          "・コスプレ衣装の制作、イベント等での着用。",
          "・本音源を使用した作品、又本キャラクターのMMD及び3DCGモデル、他イラスト素材などの公開。",
          "・非営利目的でのグッズ製作、同人イベント頒布物への本音源、キャラクターの使用。",
        ],
      },
      {
        title: "3.商用利用について",
        items: [
          "作品のジャンル問わず同志社大学VOCALOID研究会Arpeggioへの連絡必須です。",
          "また商用にあたるかどうか判断がつかない場合も同志社大学VOCALOID研究会Arpeggioへご連絡ください。",
          "即売会や、BOOTH等の同人媒体での利用や動画投稿サイトやイラスト投稿サイトへの二次創作物のアップロードを行う程度でしたら連絡は不要です。",
        ],
      },
      {
        title: "4.音源・キャラクターについて",
        items: [
          "本音源は連続音音声ライブラリです。本音源を使用した際、音源の名前を表記する必要はありません。",
          "音源はUTAU向けとなっていますが、UTAU以外のソフトで使用していただいても構いません。",
          "公式立ち絵を利用したい場合はキャラ名、作成者名を明記していただければ許可なしでご利用いただけます。",
          "他の音源キャラクターとカップリング扱いをしたい場合、お相手様の規約の禁止事項でなければ利用可能です。",
        ],
      },
      {
        title: "5.免責事項",
        items: [
          "本音源を使用したことにより損害・不利益・事故等の何らかのトラブルが発生した場合でも、当方は一切の責任を負いません。",
          "本規約は予告なく変更されることがあります。",
        ],
      },
    ],
  },
  en: {
    title: "TERMS & CONDITIONS",
    subtitle: 'Be sure to observe when using "Bion Maita".',
    sections: [
      {
        title: "1. Prohibited Items",
        items: [
          "- Use against public order and morals.",
          "- Unauthorized commercial use, political use, religious use, use for R-designated works.",
          "- Use for accounts that make excessive political, religious, or vulgar statements.",
          "- Use to despise others or other countries.",
          "- Use that causes trouble to the original author and other related parties.",
          "- Self-made remarks/redistribution.",
          "- The act of making an official standing picture an icon for any kind of SNS by anyone other than the illustration creator.",
          "- Tracing of standing pictures and related illustrations.",
          "- Actions that violate this agreement.",
        ],
      },
      {
        title: "2. Licensed Items in Compliance with Prohibited Items",
        items: [
          "- Processing of voices that can be enjoyed by individuals. (Distribution is prohibited)",
          "- Production of cosplay costumes, wearing at events, etc.",
          "- Release of works using this sound source, MMD and 3DCG models of this character, and other illustration materials.",
          "- Production of goods for non-profit purposes, use of this sound source and characters for distribution of doujin events.",
        ],
      },
      {
        title: "3. About Commercial Use",
        items: [
          "- Regardless of the genre of the work, contacting Doshisha University VOCALOID Association Arpeggio is mandatory.",
          "- If you are not sure whether it is a commercial one, please contact Doshisha University VOCALOID Association Arpeggio.",
          "- You don't need to contact us if you only use it at spot sale events, fan fiction media such as BOOTH, or upload secondary creations to video posting sites or illustration posting sites.",
        ],
      },
      {
        title: "4. About Voice Bank/Character",
        items: [
          "- This voice bank is a continuous sound audio library.",
          "- When using this sound source, it is not necessary to indicate the name of the voice bank.",
          "- The voice bank is for UTAU, but you can use it with software other than UTAU.",
          "- If you want to use the official standing picture, please specify the character name and creator's name, and you can use it without permission.",
          "- If you want to treat it as a coupling with another character, you can use it if it is not prohibited by the other party's rules.",
        ],
      },
      {
        title: "5. Disclaimer",
        items: [
          "- We do not take any responsibility even if any trouble such as damage, disadvantage, accident, etc., occurs due to using this sound source.",
          "- This agreement is subject to change without notice.",
        ],
      },
    ],
  },
} as const satisfies Record<TermsLanguage, TermsDocument>;
