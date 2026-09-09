export type AnniversaryCredit = Readonly<{
  works: string;
  creator: string;
  social?: Readonly<{
    handle: string;
    url: string;
  }>;
}>;

export type AnniversaryProject = Readonly<{
  id: string;
  date: string;
  title: string;
  image: Readonly<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  description: readonly string[];
  action: Readonly<{
    label: string;
    url: string;
  }>|null;
  credits: readonly AnniversaryCredit[]|null;
}>;

export const anniversaryProjects = [
  {
    id: "1",
    date: "2025 9/27",
    title: "琵音マイタLINEスタンプ販売！",
    image: {
      src: "/images/maita/anniversary/stamp-sample.webp",
      alt: "琵音マイタLINEスタンプ",
      width: 370,
      height: 320,
    },
    description: [
      "琵音マイタのLINEスタンプが販売開始されました！",
      "このスタンプはOBと現役生が共同で制作しました！",
      "下のボタンから琵音マイタのスタンプをご覧ください！",
    ],
    action: {
      label: "LINEスタンプストアで購入",
      url: "https://line.me/S/sticker/31434186/?lang=ja&utm_source=gnsh_stickerDetail",
    },
    credits: [
      {
        works: "ありがとうマイタ・休憩マイタ",
        creator: "ささみ",
        social: {
          handle: "@not_muneniku",
          url: "https://x.com/not_muneniku?s=21",
        },
      },
      { works: "お疲れ様ですマイタ・ぴえんマイタ", creator: "ねこの" },
      { works: "ルンルンマイタ", creator: "aru" },
      {
        works: "すみませんマイタ・照れマイタ",
        creator: "あざら",
        social: {
          handle: "@azala_exire",
          url: "https://twitter.com/azala_exire",
        },
      },
      { works: "すご～いマイタ", creator: "やし" },
      {
        works: "どうすれば…マイタ・了解ですマイタ",
        creator: "魚林",
        social: {
          handle: "@osakana_0909",
          url: "https://x.com/osakana_0909?s=21&t=hTtafvu2XqqtD9vEHu9mbA",
        },
      },
      { works: "それいいねマイタ・参ったマイタ", creator: "740" },
      {
        works: "横転マイタ・暑くて溶けるマイタ",
        creator: "でかいいぬ",
        social: {
          handle: "@dekaiyoinu",
          url: "https://x.com/dekaiyoinu?s=21&t=hTtafvu2XqqtD9vEHu9mbA",
        },
      },
      { works: "おやすみマイタ", creator: "YK" },
      {
        works: "お辞儀マイタ・進捗ダメですマイタ",
        creator: "円周率",
        social: {
          handle: "@perokyan314",
          url: "https://x.com/perokyan314?s=21&t=hTtafvu2XqqtD9vEHu9mbA",
        },
      },
      { works: "きゅんきゅんマイタ", creator: "りんく" },
      { works: "おはようマイタ", creator: "ei" },
      { works: "またねマイタ", creator: "れんれん" },
      {
        works: "宇宙猫マイタ",
        creator: "みぞれん",
        social: {
          handle: "@mizoren_arp",
          url: "https://x.com/mizoren_arp?s=21&t=hTtafvu2XqqtD9vEHu9mbA",
        },
      },
      {
        works: "今日もビールがうまいマイタ・出禁マイタ",
        creator: "とりけちゅん",
        social: {
          handle: "@kechuntori",
          url: "https://x.com/kechuntori?s=21&t=hTtafvu2XqqtD9vEHu9mbA",
        },
      },
      {
        works: "絶起マイタ",
        creator: "GA-CHAN",
        social: {
          handle: "@ga_chan_skeb",
          url: "https://x.com/ga_chan_skeb?s=21&t=hTtafvu2XqqtD9vEHu9mbA",
        },
      },
    ],
  },
  {
    id: "2",
    date: "2026 9/13",
    title: "マイタ画集",
    image: {
      src: "/images/maita/anniversary/Maita_5th_gashu.webp",
      alt: "マイタ画集",
      width: 370,
      height: 320,},
      description: [
        "お祝いイラスト企画でメンバーが書いたものを一つにまとめたもの。",
        "新入生からOB・OGさんまで沢山の人がマイタのイラストを描いてくれた、",
        "Arpeggioのイラスト班の英知が詰まった一冊だと思います！",
        "9/13の声音の宴7次会で初頒布。",
      ],
      action: null,
      credits: null,
    },
    ] as const satisfies readonly AnniversaryProject[];

export function getAnniversaryProject(projectId: string) {
  return anniversaryProjects.find((project) => project.id === projectId);
}
