import { albums } from "@/data/albums/albums";
import type { AlbumSummary } from "@/data/albums/types";

import { AlbumCatalogClient } from "./album-catalog.client";

const albumSummaries: readonly AlbumSummary[] = albums.map(
  ({ id, title, releaseLabel, description }) => ({
    id,
    title,
    releaseLabel,
    description,
  }),
);

export function AlbumCatalog() {
  return <AlbumCatalogClient albums={albumSummaries} />;
}
