export type MemberSocialLink = Readonly<{
  label: string;
  url: string;
  icon: string;
}>;

export type Member = Readonly<{
  id: string;
  name: string;
  role: string;
  directoryRole: string;
  summary: string;
  biography: string;
  imageSrc: string;
  listed: boolean;
  socialLinks: readonly MemberSocialLink[];
}>;

export const members = [
  {
    id: "nis450",
    name: "にっしー",
    role: "映像班",
    directoryRole: "映像",
    summary: "映像を作ったり、ホームページを作ったりしています",
    biography: "映像を作ったり、ホームページを作ったりしています",
    imageSrc: "/images/members/nis450.webp",
    listed: true,
    socialLinks: [
      {
        label: "X",
        url: "https://x.com/nissko04",
        icon: "🐦",
      },
    ],
  },
  {
    id: "okashiratsuki",
    name: "御頭付き",
    role: "映像班",
    directoryRole: "映像",
    summary: "映像班副班長，最近就活に苦しんでいる",
    biography: "映像班副班長，就活に苦しんでます",
    imageSrc: "/images/members/okashiratsuki.webp",
    listed: true,
    socialLinks: [],
  },
  {
    id: "000Chigusa88",
    name: "ちぐさ",
    role: "DJ",
    directoryRole: "DJ",
    summary: "ただのオタク。DJとかしてます。",
    biography: "ただのオタク。DJとかしてます。",
    imageSrc: "/images/members/000Chigusa88.webp",
    listed: false,
    socialLinks: [],
  },
  {
    id: "taka1565",
    name: "taka",
    role: "ダンス班,映像班",
    directoryRole: "ダンス,映像",
    summary: "ダンスやら映像やらやってます",
    biography: "ダンスやら映像やらやってます",
    imageSrc: "/images/members/taka1565.webp",
    listed: true,
    socialLinks: [],
  },
] as const satisfies readonly Member[];

export const directoryMembers = members.filter((member) => member.listed);

export function getMember(memberId: string) {
  return members.find((member) => member.id === memberId);
}
