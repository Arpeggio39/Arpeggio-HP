"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { loadAlbum } from "@/data/albums/load-album";
import type { Album, AlbumSummary, AlbumTrack } from "@/data/albums/types";

type AlbumLoadState =
  | Readonly<{ status: "loading" }>
  | Readonly<{ status: "ready"; album: Album }>
  | Readonly<{ status: "error" }>;

type AlbumCardProps = Readonly<{
  summary: AlbumSummary;
  index: number;
  loadState?: AlbumLoadState;
  onLoad: (albumId: string) => void;
  onOpenLyrics: (track: AlbumTrack) => void;
}>;

type LyricsDialogProps = Readonly<{
  track: AlbumTrack;
  onClose: () => void;
}>;

function LyricsDialog({ track, onClose }: LyricsDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="lyrics-dialog-title"
      aria-describedby="lyrics-dialog-credits"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg rounded-lg bg-transparent p-0 text-miku-black shadow-lg backdrop:bg-black/50"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      onClose={onClose}
    >
      <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-lg bg-white p-6">
        <form method="dialog" className="flex justify-end">
          <button
            type="submit"
            className="rounded bg-gray-300 px-4 py-2 text-black transition-colors hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-miku-blue"
          >
            閉じる
          </button>
        </form>
        <h3 id="lyrics-dialog-title" className="text-2xl font-bold">
          {track.title}
        </h3>
        <p id="lyrics-dialog-credits" className="mt-2 text-lg">
          {track.credits}
        </p>
        <p className="mt-2 max-h-80 overflow-y-auto whitespace-pre-line">
          {track.lyrics}
        </p>
      </div>
    </dialog>
  );
}

function AlbumTracks({
  album,
  onOpenLyrics,
}: Readonly<{
  album: Album;
  onOpenLyrics: (track: AlbumTrack) => void;
}>) {
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      {album.discs.map((disc) => {
        const headingId = `${album.id}-${disc.id}-heading`;

        return (
          <section
            key={disc.id}
            aria-labelledby={headingId}
            className="mb-8 flex flex-col justify-center"
          >
            <h3 id={headingId} className="mb-4 text-2xl font-semibold">
              {disc.title}
            </h3>
            <ul className="list-inside list-disc space-y-4">
              {disc.tracks.map((track) => (
                <li key={track.id} className="border-b border-gray-300 pb-2">
                  {track.title}
                  <br />
                  {track.credits}
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => onOpenLyrics(track)}
                    className="ml-4 rounded bg-miku-blue px-2 py-1 text-white transition-colors hover:bg-miku-pink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-miku-pink"
                  >
                    歌詞
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={(event) => {
            const details = event.currentTarget.closest("details");
            details?.removeAttribute("open");
            details?.querySelector("summary")?.focus();
          }}
          className="rounded bg-gray-300 px-4 py-2 text-black transition-colors hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-miku-blue"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}

function AlbumCard({
  summary,
  index,
  loadState,
  onLoad,
  onOpenLyrics,
}: AlbumCardProps) {
  return (
    <details
      className="group relative mb-8 flex w-4/5 max-w-7xl animate-fade-in-up flex-col rounded-lg bg-white p-6 opacity-0 shadow-lg transition-[background-color,box-shadow] duration-200 hover:bg-[#bec8d1] hover:shadow-xl open:hover:bg-white open:hover:shadow-lg"
      style={{ animationDelay: `${index * 80}ms` }}
      onToggle={(event) => {
        if (event.currentTarget.open) {
          onLoad(summary.id);
        }
      }}
    >
      <summary className="w-full cursor-pointer list-none rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-miku-blue [&::-webkit-details-marker]:hidden">
        <span className="mb-4 flex flex-col items-start gap-6 content:flex-row">
          <span className="relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-lg">
            <Image
              fill
              src={`/images/albums/${summary.id}.webp`}
              alt={`${summary.title}のジャケット`}
              loading={index < 2 ? "eager" : "lazy"}
              sizes="200px"
              className="object-cover"
            />
          </span>

          <span className="flex flex-col">
            <span role="heading" aria-level={2} className="text-3xl font-bold">
              {summary.title}
            </span>
            <span className="mt-2">{summary.releaseLabel}</span>
            <span className="mt-2">{summary.description}</span>
          </span>
        </span>
      </summary>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-8 w-8 rounded-tl-lg border-t-4 border-l-4 border-miku-pink"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-8 w-8 rounded-tr-lg border-t-4 border-r-4 border-miku-pink"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-4 border-l-4 border-miku-blue"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-8 w-8 rounded-br-lg border-r-4 border-b-4 border-miku-blue"
      />

      {loadState?.status === "loading" ? (
        <p role="status" className="mt-6 border-t border-gray-200 pt-6">
          収録曲を読み込んでいます…
        </p>
      ) : null}

      {loadState?.status === "error" ? (
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p>収録曲を読み込めませんでした。</p>
          <button
            type="button"
            onClick={() => onLoad(summary.id)}
            className="mt-3 rounded bg-miku-blue px-3 py-2 text-white transition-colors hover:bg-miku-pink"
          >
            再読み込み
          </button>
        </div>
      ) : null}

      {loadState?.status === "ready" ? (
        <AlbumTracks album={loadState.album} onOpenLyrics={onOpenLyrics} />
      ) : null}
    </details>
  );
}

export function AlbumCatalogClient({
  albums,
}: Readonly<{ albums: readonly AlbumSummary[] }>) {
  const [loadStates, setLoadStates] = useState<
    Readonly<Record<string, AlbumLoadState>>
  >({});
  const [selectedTrack, setSelectedTrack] = useState<AlbumTrack | null>(null);

  async function ensureAlbumLoaded(albumId: string) {
    const currentState = loadStates[albumId];
    if (
      currentState?.status === "loading" ||
      currentState?.status === "ready"
    ) {
      return;
    }

    setLoadStates((states) => ({
      ...states,
      [albumId]: { status: "loading" },
    }));

    try {
      const album = await loadAlbum(albumId);
      setLoadStates((states) => ({
        ...states,
        [albumId]: { status: "ready", album },
      }));
    } catch {
      setLoadStates((states) => ({
        ...states,
        [albumId]: { status: "error" },
      }));
    }
  }

  return (
    <section
      aria-labelledby="album-page-title"
      className="flex flex-col items-center justify-center bg-miku-cyan pt-10 tracking-wide text-miku-black"
    >
      {albums.map((album, index) => (
        <AlbumCard
          key={album.id}
          summary={album}
          index={index}
          loadState={loadStates[album.id]}
          onLoad={(albumId) => void ensureAlbumLoaded(albumId)}
          onOpenLyrics={setSelectedTrack}
        />
      ))}

      {selectedTrack ? (
        <LyricsDialog
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)}
        />
      ) : null}
    </section>
  );
}
