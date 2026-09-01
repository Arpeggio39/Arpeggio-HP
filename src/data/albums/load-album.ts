import type { AlbumId } from "./albums";
import type { Album } from "./types";

type AlbumLoader = () => Promise<Album>;

const albumLoaders = {
  "20260426": () =>
    import("./album-2026-04-26").then((module) => module.album20260426),
  "20250914": () =>
    import("./album-2025-09-14").then((module) => module.album20250914),
  "20240923": () =>
    import("./album-2024-09-23").then((module) => module.album20240923),
  "20240302": () =>
    import("./album-2024-03-02").then((module) => module.album20240302),
  "20231230": () =>
    import("./album-2023-12-30").then((module) => module.album20231230),
  "20230709": () =>
    import("./album-2023-07-09").then((module) => module.album20230709),
  "20230312": () =>
    import("./album-2023-03-12").then((module) => module.album20230312),
  "20221230": () =>
    import("./album-2022-12-30").then((module) => module.album20221230),
  "20220911": () =>
    import("./album-2022-09-11").then((module) => module.album20220911),
  "20220424": () =>
    import("./album-2022-04-24").then((module) => module.album20220424),
  "20211231": () =>
    import("./album-2021-12-31").then((module) => module.album20211231),
  "20211126": () =>
    import("./album-2021-11-26").then((module) => module.album20211126),
  "20210327": () =>
    import("./album-2021-03-27").then((module) => module.album20210327),
  "20201115": () =>
    import("./album-2020-11-15").then((module) => module.album20201115),
  "20200406": () =>
    import("./album-2020-04-06").then((module) => module.album20200406),
  "20191020": () =>
    import("./album-2019-10-20").then((module) => module.album20191020),
  "20190310": () =>
    import("./album-2019-03-10").then((module) => module.album20190310),
  "20181126": () =>
    import("./album-2018-11-26").then((module) => module.album20181126),
  "20171126": () =>
    import("./album-2017-11-26").then((module) => module.album20171126),
  "20170305": () =>
    import("./album-2017-03-05").then((module) => module.album20170305),
  "20161126": () =>
    import("./album-2016-11-26").then((module) => module.album20161126),
  "20151126": () =>
    import("./album-2015-11-26").then((module) => module.album20151126),
  "20141126": () =>
    import("./album-2014-11-26").then((module) => module.album20141126),
  "20131126": () =>
    import("./album-2013-11-26").then((module) => module.album20131126),
  "20121126": () =>
    import("./album-2012-11-26").then((module) => module.album20121126),
} as const satisfies Record<AlbumId, AlbumLoader>;

export async function loadAlbum(albumId: string) {
  if (!(albumId in albumLoaders)) {
    throw new Error(`Unknown album: ${albumId}`);
  }

  return albumLoaders[albumId as keyof typeof albumLoaders]();
}
