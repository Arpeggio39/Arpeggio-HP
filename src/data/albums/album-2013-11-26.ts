import type { Album } from "./types";

export const album20131126 = {
  id: "20131126",
  title: "-2nd Album- 「Arpeggio2」",
  releaseLabel: "Release:2013.11.26~28",
  description: "2013年度同志社EVEにて発表",
  discs: [
    {
      id: "20131126-disc-1",
      title: "Disc.1",
      tracks: [
        {
          id: "20131126-disc-1-track-1",
          title: "1. WAVE / cover（feat.春歌ナナ）",
          credits: "- 7*7（原曲 : nikiさん）",
          lyrics: "",
        },
        {
          id: "20131126-disc-1-track-2",
          title: "2. ダンスナンバーを共に / cover（feat.春歌ナナ）",
          credits: "- 7*7（原曲 : ナナホシ管弦楽団さん）",
          lyrics: "",
        },
        {
          id: "20131126-disc-1-track-3",
          title: "3. Wobble NOiSE（feat.初音ミク）",
          credits: "- 曲線テンプレート",
          lyrics: "",
        },
        {
          id: "20131126-disc-1-track-4",
          title: "4. 夕暮れジャック（feat.初音ミク）",
          credits: "- ワカバ",
          lyrics: "",
        },
        {
          id: "20131126-disc-1-track-5",
          title: "5. 流星ハンター Piano Arrangement（instrumental）",
          credits: "- 希崎P（原曲 : 40mPさん）",
          lyrics: "",
        },
      ],
    },
  ],
} as const satisfies Album;
