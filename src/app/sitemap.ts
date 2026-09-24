import type { MetadataRoute } from "next";

import { anniversaryProjects } from "@/data/anniversary";
import { directoryMembers } from "@/data/members";
import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "",
  "activity/",
  "album/",
  "postfes/",
  "members/",
  "maita/",
  "maita/term/",
  "maita/5th/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...STATIC_ROUTES,
    ...directoryMembers.map((member) => `members/${member.id}/` as const),
    ...anniversaryProjects.map(
      (project) => `maita/5th/projects/${project.id}/` as const,
    ),
  ];

  return routes.map((route, index) => ({
    url: new URL(route, SITE_URL).toString(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
