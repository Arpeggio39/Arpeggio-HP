import type { Album } from "./types";

export const album20141126 = {
  id: "20141126",
  title: "-3rd Album- 「Arpeggio3」",
  releaseLabel: "Release:2014.11.26~28",
  description:
    "2014年度同志社EVEにて発表・2015年度VOCALOID PARADISE 関西4にて頒布",
  discs: [
    {
      id: "20141126-disc-1",
      title: "Disc.1",
      tracks: [
        {
          id: "20141126-disc-1-track-1",
          title: "1. 朝露唄う頃（インスト）（feat.IA）",
          credits: "- ほたての人",
          lyrics: "",
        },
        {
          id: "20141126-disc-1-track-2",
          title: "2. sweet conversation（feat.GUMI）",
          credits: "- Yuzuru Takahashi",
          lyrics: "",
        },
        {
          id: "20141126-disc-1-track-3",
          title: "3. isolation（feat.初音ミクAppend）",
          credits: "- 曲線テンプレート",
          lyrics: "",
        },
        {
          id: "20141126-disc-1-track-4",
          title: "4. FROM DIM ROOM（feat.GUMI）",
          credits: "- 石川博人",
          lyrics: "",
        },
        {
          id: "20141126-disc-1-track-5",
          title: "5. 存在意義（feat.健音テイ）",
          credits: "- にゃんとも",
          lyrics: "",
        },
        {
          id: "20141126-disc-1-track-6",
          title: "6. 夕暮れジャック（feat.初音ミク）",
          credits: "- ワカバ",
          lyrics: "",
        },
        {
          id: "20141126-disc-1-track-7",
          title: "7. ブルームーン（feat.初音ミク）",
          credits: "- ワカバ",
          lyrics: "",
        },
        {
          id: "20141126-disc-1-track-8",
          title: "8. RTA（feat.鏡音リン）",
          credits: "- IS",
          lyrics: "",
        },
      ],
    },
  ],
} as const satisfies Album;
