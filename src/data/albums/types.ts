export type AlbumTrack = Readonly<{
  id: string;
  title: string;
  credits: string;
  lyrics: string;
}>;

export type AlbumDisc = Readonly<{
  id: string;
  title: string;
  tracks: readonly AlbumTrack[];
}>;

export type Album = Readonly<{
  id: string;
  title: string;
  releaseLabel: string;
  description: string;
  discs: readonly AlbumDisc[];
}>;

export type AlbumSummary = Pick<
  Album,
  "id" | "title" | "releaseLabel" | "description"
>;
