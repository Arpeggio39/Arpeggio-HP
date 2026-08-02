import type { Album } from "./types";

export const album20121126 = {
  id: "20121126",
  title: "-1st Album- 「Arpeggio」",
  releaseLabel: "Release:2012.11.26~28",
  description: "2012年度同志社EVEにて発表",
  discs: [
    {
      id: "20121126-disc-1",
      title: "Disc.1",
      tracks: [
        {
          id: "20121126-disc-1-track-1",
          title: "1. inducement（feat.初音ミク）",
          credits: "- 曲線テンプレート",
          lyrics: "",
        },
        {
          id: "20121126-disc-1-track-2",
          title: "2. Fall（feat.SF-A2 開発コードmiki）",
          credits: "- IS",
          lyrics: "",
        },
        {
          id: "20121126-disc-1-track-3",
          title: "3. ウソツキ（feat.巡音ルカ）",
          credits: "- nojika",
          lyrics: "",
        },
        {
          id: "20121126-disc-1-track-4",
          title: "4. コトノハ（feat.鏡音レン・初音ミク）",
          credits: "- ムサシノ",
          lyrics: "",
        },
        {
          id: "20121126-disc-1-track-5",
          title: "5. Dog Day Afternoon　/ remix（feat.IA）",
          credits: "- 匿名希望（原曲 : nuzさん）",
          lyrics: "",
        },
      ],
    },
  ],
} as const satisfies Album;
