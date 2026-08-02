import type { Album } from "./types";

export const album20240302 = {
  id: "20240302",
  title: "-21st Album-「21世紀に息をして」",
  releaseLabel: "Release:2024.03.02",
  description: "VOCALOID STREET 8(3/2)で販売",
  discs: [
    {
      id: "20240302-disc-1",
      title: "Disc.1",
      tracks: [
        {
          id: "20240302-disc-1-track-1",
          title: "近所に中國料理店オプーンしたし！",
          credits: "曲・詞：焼きとうきび",
          lyrics: "",
        },
        {
          id: "20240302-disc-1-track-2",
          title: "マスコットガール",
          credits: "曲・詞：須賀 feat.初音ミク",
          lyrics: "",
        },
        {
          id: "20240302-disc-1-track-3",
          title: "花隈千冬(成人)とジャズバーに行って情緒を狂わされたい曲",
          credits: "曲・詞：あでり犬 feat.花隈千冬",
          lyrics: "",
        },
      ],
    },
  ],
} as const satisfies Album;
