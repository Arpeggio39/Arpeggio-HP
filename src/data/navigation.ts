export type InternalNavigationLink = Readonly<{
  type: "internal";
  label: string;
  href: `/${string}`;
}>;

export type ExternalNavigationLink = Readonly<{
  type: "external";
  label: string;
  href: `http${"s" | ""}://${string}`;
}>;

export type NavigationLink = InternalNavigationLink | ExternalNavigationLink;

export type NavigationMenu = Readonly<{
  type: "menu";
  label: string;
  items: readonly ExternalNavigationLink[];
}>;

export const siteNavigation = [
  { type: "internal", label: "TOP", href: "/" },
  { type: "internal", label: "活動内容", href: "/activity" },
  {
    type: "external",
    label: "note",
    href: "https://note.com/arpeggiovocaloid/",
  },
  {
    type: "external",
    label: "fc2",
    href: "http://arpeggiod.blog90.fc2.com/",
  },
  { type: "internal", label: "琵音マイタ", href: "/maita" },
  { type: "internal", label: "ALBUM", href: "/album" },
] as const satisfies readonly NavigationLink[];

const postFestivalBlogNavigation = [
  {
    type: "external",
    label: "note",
    href: "https://note.com/arpeggiovocaloid/n/ndd0cf9f50ba5",
  },
  {
    type: "external",
    label: "fc2",
    href: "http://arpeggiod.blog90.fc2.com/",
  },
] as const satisfies readonly ExternalNavigationLink[];

export const postFestivalNavigation = [
  { type: "internal", label: "TOP", href: "/" },
  { type: "internal", label: "ALBUM", href: "/album" },
  {
    type: "menu",
    label: "BLOG",
    items: postFestivalBlogNavigation,
  },
  { type: "internal", label: "琵音マイタ", href: "/maita" },
  { type: "internal", label: "投稿祭", href: "/postfes" },
] as const satisfies readonly (NavigationLink | NavigationMenu)[];
