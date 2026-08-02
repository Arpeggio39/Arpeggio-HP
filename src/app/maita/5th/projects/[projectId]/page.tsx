import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header.client";
import {
  anniversaryProjects,
  getAnniversaryProject,
  type AnniversaryCredit,
} from "@/data/anniversary";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return anniversaryProjects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getAnniversaryProject(projectId);

  return project
    ? { title: project.title, description: project.description.join(" ") }
    : {};
}

function Credit({ credit }: { credit: AnniversaryCredit }) {
  return (
    <p>
      <strong>{credit.works}</strong>
      <br />
      {credit.creator}
      {credit.social ? (
        <>
          （
          <a
            href={credit.social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600! hover:text-blue-800!"
          >
            {credit.social.handle}
          </a>
          ）
        </>
      ) : null}
    </p>
  );
}

export default async function AnniversaryProjectPage({
  params,
}: ProjectPageProps) {
  const { projectId } = await params;
  const project = getAnniversaryProject(projectId);

  if (!project) {
    notFound();
  }

  const creditMidpoint = Math.ceil(project.credits.length / 2);
  const creditColumns = [
    project.credits.slice(0, creditMidpoint),
    project.credits.slice(creditMidpoint),
  ];

  return (
    <div className="relative min-h-screen bg-pink-50">
      <SiteHeader />

      <main id="main-content" className="px-4 pt-32 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <Image
              src="/images/maita/anniversary/header.webp"
              alt="5th Anniversary Logo"
              width={300}
              height={100}
              loading="eager"
              className="mx-auto h-auto"
            />
          </div>

          <article className="rounded-2xl bg-white p-8 shadow-lg">
            <p className="mb-4 text-sm text-gray-500">{project.date}</p>
            <h1 className="mb-6 text-xl font-bold text-gray-800 md:text-3xl">
              {project.title}
            </h1>

            <div className="mb-8 flex flex-col md:flex-row md:items-start md:gap-8">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                loading="eager"
                className="mb-6 h-auto w-[200px] shrink-0 rounded-2xl object-cover md:mb-0"
              />
              <div className="min-w-0 flex-1">
                <p className="mb-6 leading-relaxed text-gray-700">
                  {project.description.map((line, index) => (
                    <span key={line}>
                      {line}
                      {index < project.description.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
                <div className="mb-8 text-center md:text-left">
                  <a
                    href={project.action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-green-500 px-8 py-3 font-semibold text-white! shadow-lg transition-colors duration-200 hover:bg-green-600 hover:shadow-xl"
                  >
                    {project.action.label}
                  </a>
                </div>
              </div>
            </div>

            <section className="mt-12 rounded-xl bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                クレジット
              </h2>
              <div className="grid grid-cols-1 gap-6 text-sm text-gray-700 md:grid-cols-2">
                {creditColumns.map((credits, columnIndex) => (
                  <div
                    key={columnIndex === 0 ? "left" : "right"}
                    className="space-y-3"
                  >
                    {credits.map((credit) => (
                      <Credit key={credit.works} credit={credit} />
                    ))}
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-12 text-center">
              <Link
                href="/maita/5th/"
                className="inline-flex items-center text-gray-600 transition-colors duration-200 hover:text-gray-800"
              >
                <svg
                  className="mr-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                トップに戻る
              </Link>
            </div>
          </article>
        </div>
      </main>

      <SiteFooter variant="light" className="bg-transparent! text-gray-800!" />
    </div>
  );
}
