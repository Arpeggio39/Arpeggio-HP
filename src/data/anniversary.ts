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
    title: "マイタ画集制作！",
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
    {
      id: "3",
      date: "2026 9/13",
      title: "マイタアルバム制作！",
      image: {
        src: "/images/albums/20260426.webp",
        alt: "マイタアルバム",
        width: 370,
        height: 320,
      },
      description: [
        "4/26のM3春2026において",
        "マイタアルバムを初頒布しました！",
      ],
      action: null,
      credits: [
        {
          works: "ほしぞら電波放送部",
          creator: "あでり犬 feat.MYCOEIROINK:琵音マイタ",
        },
        {
          works: "ノンフィクション",
          creator: "しゅー feat.琵音マイタPolaris",
        },
        {
          works: "PRISMATIC VOYAGER",
          creator: "Hanno feat.琵音マイタPolaris",
        },
        {
          works: "Ἀρκαδία",
          creator: "Med Art 詞：葉城雅樹/はじょみやP 調声：れんれん feat.琵音マイタ",
        },
        {
          works: "イン・マイ・ハート",
          creator: "nogami feat.琵音マイタPolaris",
        },
        {
          works: "dis-A-star",
          creator: "衣縫燦志郎 feat.琵音マイタ",
        },
        {
          works: "宵の雨",
          creator: "みぞれん feat.琵音マイタPolaris",
        },
        {
          works: "SwankyDogs",
          creator: "ムックP 調声：葉城雅樹/はじょみやP feat.琵音マイタ",
        },
        {
          works: "ハルサメ",
          creator: "ちゅる feat.琵音マイタ(すべて)",
        },
        {
            works: "クラゲの骨を掬いに行こう",
            creator: "たとたと feat.琵音マイタCapella(+Antares)",
        },
        {
          works: "よるべのともしび",
          creator: "みかん 詞：七凌 調声：みたり feat.琵音マイタPolaris",
        },
        {
          works: "由なき郷",
          creator: "トラギカ feat.琵音マイタ",
        },
        {
          works: "ポラリスと鐘",
          creator: "Mariner feat.琵音マイタPolaris",
        },
        {
          works: "徒然コンファメーション",
          creator: "Kito 歌詞：葉城雅樹/はじょみやP 調声：くろ州 feat.琵音マイタPolaris",
        },
        {
          works: "名誉滋賀県民、津田",
          creator: "えび 調声：たとたと feat.琵音マイタSirius",
        },
        {
          works: "Stela",
          creator: "Kito 歌詞：葉城雅樹/はじょみやP 調声：くろ州 feat.琵音マイタPolaris",
        },
        {
          works: "ハイウェイラジオ",
          creator: "52.5℃ feat.MYCOEIROINK:琵音マイタ、VOICEPEAK花隈千冬",
        },
      ],
    },
    {
      id: "4",
      date: "2026 9/13",
      title: "琵音マイタの2Dモデル実装！",
      image: {
        src: "/images/maita/anniversary/2Dmodel.webp",
        alt: "2Dモデル",
        width: 370,
        height: 320,
      },
      description: [
        "六素さんが作ってくれたライブ２Dモデル。",
        "ついにマイタが動いてしゃべりました！",
        "サークルの広報などで使用してるよ！",
      ],
      action: null,
      credits: null,
    },
    {
      id: "5",
      date: "2026 9/13",
      title: "マイタエンブレム制作！",
      image: {
        src: "/images/maita/emblem.png",
        alt: "マイタエンブレム",
        width: 370,
        height: 320,
      },
      description: [
      "マイタのMと角（？）の部分を表しています！",
      "また、横に倒すとBになるデザインにすることと、",
      "シンプルで見やすくすることを意識していました！",
      ],
      action: null,
      credits: null,
    },
    ] as const satisfies readonly AnniversaryProject[];

export function getAnniversaryProject(projectId: string) {
  return anniversaryProjects.find((project) => project.id === projectId);
}
