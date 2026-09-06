export type MaitaImage = Readonly<{
  src: string;
  width: number;
  height: number;
}>;

export type Voicebank = Readonly<{
  id: string;
  name: string;
  description: string;
  illustrator: string;
  accentColors: readonly string[];
  portrait: MaitaImage;
  design?: MaitaImage;
  demoSongUrl?: string;
  downloadUrl: string;
}>;

export type ProfileItem = Readonly<{
  label: string;
  value: string;
}>;

export const maitaProfile = [
  { label: "名前", value: "琵音 マイタ" },
  { label: "性別", value: "女性" },
  { label: "学年", value: "同志社大学3回生" },
  { label: "誕生日", value: "5月17日" },
  { label: "身長", value: "165cm" },
  { label: "体重", value: "秘密" },
  { label: "一人称", value: "僕" },
  { label: "口癖", value: "「どうすれば......」" },
] as const satisfies readonly ProfileItem[];

export const voicebanks: readonly Voicebank[] = [
  {
    id: "Normal",
    name: "琵音マイタ 標準音源セット",
    description:
      "C4連続音です。語尾息と表情音源（がなり、エッジ）も収録されています。",
    illustrator: "まどか",
    accentColors: [
      "#ef3c38",
      "#ff983b",
      "#fff43f",
      "#44cd2b",
      "#2dc4cd",
      "#324b9c",
      "#9b43cd",
    ],
    portrait: {
      src: "/images/maita/shared/portrait.webp",
      width: 1130,
      height: 1600,
    },
    design: {
      src: "/images/maita/shared/design.webp",
      width: 2000,
      height: 1731,
    },
    demoSongUrl: "https://www.nicovideo.jp/watch/sm36871941",
    downloadUrl:
      "https://github.com/Arpeggio39/Arpeggio-HP/releases/download/voicebanks-v1/maita-normal.zip",
  },
  {
    id: "Capella",
    name: "琵音マイタ Capella",
    description:
      "弱音源。音素の後ろに「弱」をつけた時に鳴る連続音音源です。例:「-い弱」",
    illustrator: "とりけちゅん",
    accentColors: [
      "#ffa39f",
      "#9ffffa",
      "#fa3d06",
      "#89c9c9",
      "#a09f9f",
      "#c600ff",
      "#e52bdd",
    ],
    portrait: {
      src: "/images/maita/capella/portrait.webp",
      width: 900,
      height: 1600,
    },
    design: {
      src: "/images/maita/capella/design.webp",
      width: 2000,
      height: 1414,
    },
    demoSongUrl: "https://www.nicovideo.jp/watch/sm40047206",
    downloadUrl:
      "https://github.com/Arpeggio39/Arpeggio-HP/releases/download/voicebanks-v1/maita-capella.zip",
  },
  {
    id: "Antares",
    name: "琵音マイタ Antares",
    description:
      "ウィスパー音源。音素の後ろに「W」をつけた時に鳴る連続音音源です。例:「-いW」",
    illustrator: "すい",
    accentColors: ["#ff69b4", "#ff1493", "#ff00ff"],
    portrait: {
      src: "/images/maita/antares/portrait.webp",
      width: 900,
      height: 1600,
    },
    design: {
      src: "/images/maita/shared/design.webp",
      width: 2000,
      height: 1731,
    },
    demoSongUrl:
      "https://www.nicovideo.jp/watch/sm40479208?via=thumb_watch&at=title&state=unplayed&from=0",
    downloadUrl:
      "https://github.com/Arpeggio39/Arpeggio-HP/releases/download/voicebanks-v1/maita-antares.zip",
  },
  {
    id: "Sirius",
    name: "琵音マイタ Sirius",
    description:
      "強音源。音素の後ろに「強」をつけた時に鳴る連続音音源です。例:「-い強」",
    illustrator: "円周率",
    accentColors: [
      "#5e5f5f",
      "#f9e5d2",
      "#e5e6e7",
      "#d66260",
      "#d27863",
      "#ffce84",
      "#ffba73",
      "#acb29c",
      "#a5d4d8",
      "#3a60b2",
      "#7866ac",
    ],
    portrait: {
      src: "/images/maita/sirius/portrait.webp",
      width: 900,
      height: 1600,
    },
    design: {
      src: "/images/maita/sirius/design.webp",
      width: 2000,
      height: 1414,
    },
    demoSongUrl:
      "https://www.nicovideo.jp/watch/sm42232993?via=thumb_watch&at=title&state=unplayed&from=0",
    downloadUrl:
      "https://github.com/Arpeggio39/Arpeggio-HP/releases/download/voicebanks-v1/maita-sirius.zip",
  },
  {
    id: "Polaris",
    name: "琵音マイタ Polaris",
    description:
      "多音階音源。琵音マイタ標準音源セットにA4音源とC5音源を追加した3音階の連続音音源です。",
    illustrator: "魚林",
    accentColors: [
      "#41404d",
      "#a6afbc",
      "#f1f2f5",
      "#fff0ea",
      "#f95f66",
      "#fdb571",
      "#ffe783",
      "#cbff81",
      "#71e2e8",
      "#5a70da",
      "#b571f4",
    ],
    portrait: {
      src: "/images/maita/polaris/portrait.webp",
      width: 900,
      height: 1600,
    },
    design: {
      src: "/images/maita/polaris/design.webp",
      width: 1630,
      height: 1336,
    },
    demoSongUrl: "https://www.nicovideo.jp/watch/sm44330136",
    downloadUrl:
      "https://github.com/Arpeggio39/Arpeggio-HP/releases/download/voicebanks-v1/maita-polaris.zip",
  },
  {
    id: "COEIROINK",
    name: "琵音マイタ COEIROINK音源",
    description:
      "COEIROINKで使用できるMYCOEIROINK用音声モデルです。導入方法は下のボタンからご確認ください。",
    illustrator: "GA-CHAN",
    accentColors: [
      "#ef3c38",
      "#ff983b",
      "#fff43f",
      "#44cd2b",
      "#2dc4cd",
      "#324b9c",
      "#9b43cd",
    ],
    portrait: {
      src: "/images/maita/standing/01-default.png",
      width: 800,
      height: 1200,
    },
    downloadUrl:
      "https://github.com/Arpeggio39/MaitaCOEIROINK/releases/latest/download/bionmaita-1.0.0.zip",
  },
  {
    id: "Extra",
    name: "エクストラVoiceセット",
    description:
      "数字カウント（日本語と英語対応）や、名前の読み上げなど使えそうな素材を全82種用意しています。",
    illustrator: "まどか",
    accentColors: ["#ff69b4", "#ff1493", "#ff00ff"],
    portrait: {
      src: "/images/maita/shared/portrait.webp",
      width: 1130,
      height: 1600,
    },
    design: {
      src: "/images/maita/shared/design.webp",
      width: 2000,
      height: 1731,
    },
    downloadUrl:
      "https://github.com/Arpeggio39/Arpeggio-HP/releases/download/voicebanks-v1/maita-extra.zip",
  },
];
