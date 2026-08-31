import type { Album } from "./types";
import { album20260426 } from "./album-2026-04-26";
import { album20250914 } from "./album-2025-09-14";
import { album20240923 } from "./album-2024-09-23";
import { album20240302 } from "./album-2024-03-02";
import { album20231230 } from "./album-2023-12-30";
import { album20230709 } from "./album-2023-07-09";
import { album20230312 } from "./album-2023-03-12";
import { album20221230 } from "./album-2022-12-30";
import { album20220911 } from "./album-2022-09-11";
import { album20220424 } from "./album-2022-04-24";
import { album20211231 } from "./album-2021-12-31";
import { album20211126 } from "./album-2021-11-26";
import { album20210327 } from "./album-2021-03-27";
import { album20201115 } from "./album-2020-11-15";
import { album20200406 } from "./album-2020-04-06";
import { album20191020 } from "./album-2019-10-20";
import { album20190310 } from "./album-2019-03-10";
import { album20181126 } from "./album-2018-11-26";
import { album20171126 } from "./album-2017-11-26";
import { album20170305 } from "./album-2017-03-05";
import { album20161126 } from "./album-2016-11-26";
import { album20151126 } from "./album-2015-11-26";
import { album20141126 } from "./album-2014-11-26";
import { album20131126 } from "./album-2013-11-26";
import { album20121126 } from "./album-2012-11-26";

export const albums = [
  album20250914,
  album20240923,
  album20240302,
  album20231230,
  album20230709,
  album20230312,
  album20221230,
  album20220911,
  album20220424,
  album20211231,
  album20211126,
  album20210327,
  album20201115,
  album20200406,
  album20191020,
  album20190310,
  album20181126,
  album20171126,
  album20170305,
  album20161126,
  album20151126,
  album20141126,
  album20131126,
  album20121126,
] as const satisfies readonly Album[];

export type AlbumId = (typeof albums)[number]["id"];
