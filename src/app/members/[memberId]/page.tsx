import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import { getMember, members } from "@/data/members";

type MemberPageProps = {
  params: Promise<{ memberId: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return members.map((member) => ({ memberId: member.id }));
}

export async function generateMetadata({
  params,
}: MemberPageProps): Promise<Metadata> {
  const { memberId } = await params;
  const member = getMember(memberId);

  if (!member) {
    return {};
  }

  return {
    title: member.name,
    description: member.biography,
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { memberId } = await params;
  const member = getMember(memberId);

  if (!member) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main id="main-content" className="min-h-screen bg-black text-white">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-8 size-48 overflow-hidden rounded-full border-4 border-miku-blue">
            <Image
              src={member.imageSrc}
              alt={member.name}
              width={192}
              height={192}
              loading="eager"
              className="size-full object-cover"
            />
          </div>
          <h1 className="mb-4 animate-fade-in-up text-center text-3xl font-bold opacity-0 md:text-5xl">
            {member.name}
          </h1>
          <p className="mb-2 text-xl font-semibold text-miku-blue">
            {member.role}
          </p>
          <p className="mx-10 max-w-2xl text-center text-lg">
            {member.biography}
          </p>
        </div>

        {member.socialLinks.length > 0 ? (
          <div className="mx-12 flex flex-col items-center justify-center pb-20 tracking-wider">
            <section className="mt-12 w-full max-w-2xl rounded-lg border border-miku-blue bg-transparent p-6">
              <h2 className="mb-6 border-b border-miku-blue pb-2 text-center text-2xl font-bold">
                ソーシャルメディア
              </h2>
              <div className="flex justify-center gap-6">
                {member.socialLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center rounded-lg border border-miku-blue p-4 transition-[transform,border-color] hover:scale-105 hover:border-miku-pink"
                  >
                    <span className="mb-2 text-3xl" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span className="font-semibold text-miku-blue">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        ) : null}
      </main>

      <SiteFooter variant="dark" />
    </>
  );
}
