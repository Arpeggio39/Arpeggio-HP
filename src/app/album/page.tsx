"use client";

import Head from 'next/head';
import { useState } from 'react';
import { Song } from "@/classes/album";
import { albumList } from '../../const/album/albumlist';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [expandedAlbums, setExpandedAlbums] = useState<Set<string>>(new Set());

    const toggleModal = (song: Song | null) => {
        setCurrentSong(song);
        setModalOpen(!isModalOpen);
    };

    const toggleAlbumExpand = (albumId: string) => {
        setExpandedAlbums(prev => {
            const next = new Set(prev);
            if (next.has(albumId)) {
                next.delete(albumId);
            } else {
                next.add(albumId);
            }
            return next;
        });
    };

    return (
        <div className='bg-mikuCyan'>
            <Head>
                <title>Arpeggio</title>
            </Head>
            <Header bgColor="bg-mikuCyan" textColor="text-mikuBlack" />
            <div className="bg-mikuCyan">
                <div className="bg-mikuCyan text-mikuBlack flex flex-col items-center justify-left tracking-lwidest">
                    <h1 className="mt-32 text-6xl font-bold animate-fadeInDown">Album</h1>
                </div>

                <div className="bg-mikuCyan text-mikuBlack flex flex-col items-center justify-center pt-10 tracking-wide">
                    {albumList.albumList.map((album, index) => (
                        <div
                            key={album.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleAlbumExpand(album.id)}
                            onKeyDown={(e) => e.key === 'Enter' && toggleAlbumExpand(album.id)}
                            className="relative bg-white p-6 w-4/5 max-w-7xl rounded-lg shadow-lg flex flex-col mb-8 p-4 cursor-pointer hover:bg-[#bec8d1] hover:shadow-xl transition-all duration-200 animate-fadeInUp"
                            style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'backwards' }}
                        >
                            <div className="before:absolute before:top-0 before:left-0 before:border-t-4 before:border-l-4 before:border-mikuPink before:h-8 before:w-8 before:rounded-tl-lg
                   after:absolute after:top-0 after:right-0 after:border-t-4 after:border-r-4 after:border-mikuPink after:h-8 after:w-8 after:rounded-tr-lg">
                                <div className="before:absolute before:bottom-0 before:left-0 before:border-b-4 before:border-l-4 before:border-mikuBlue before:h-8 before:w-8 before:rounded-bl-lg
                       after:absolute after:bottom-0 after:right-0 after:border-b-4 after:border-r-4 after:border-mikuBlue after:h-8 after:w-8 after:rounded-br-lg">
                                    <div className="flex flex-col custom:flex-row items-start gap-6 mb-4">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={`/album/${album.id}/image.png`}
                                                alt={`${album.name} Cover`}
                                                className="w-[200px] object-cover rounded-lg"
                                                width={200}
                                                height={200}
                                                unoptimized={true}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-3xl font-bold">{album.name}</h2>
                                            <p className="mt-2">{album.date}</p>
                                            <p className="mt-2">{album.instruction}</p>
                                        </div>
                                    </div>

                                    {expandedAlbums.has(album.id) && (
                                        <div
                                            className="mt-6 pt-6 border-t border-gray-200"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {album.discs.map((disc, discIndex) => (
                                                    <div key={discIndex} className="flex flex-col justify-center mb-8">
                                                        <h3 className="text-2xl font-semibold mb-4">{disc.number}</h3>
                                                        <ul className="list-disc list-inside space-y-4">
                                                            {disc.songs.map((song, songIndex) => (
                                                                <li key={songIndex} className="pb-2 border-b border-gray-300">
                                                                    {song.name} <br /> {song.maker}
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            toggleModal(song);
                                                                        }}
                                                                        className="ml-4 bg-mikuBlue text-white px-2 py-1 rounded hover:bg-mikuPink transition-colors"
                                                                    >
                                                                        歌詞
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* モーダル */}
            {isModalOpen && currentSong && (
                <div className="fixed text-mikuBlack inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-out">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg max-h-screen overflow-y-auto transform transition-transform duration-300 ease-out scale-95 opacity-0"
                        style={{ opacity: isModalOpen ? '1' : '0', transform: isModalOpen ? 'scale(1)' : 'scale(0.95)' }}
                    >
                        <div className="flex justify-end">
                            <button
                                onClick={() => toggleModal(null)}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-colors focus:outline-none"
                            >
                                閉じる
                            </button>
                        </div>
                        <h3 className="text-2xl font-bold">{currentSong.name}</h3>
                        <p className="mt-2 text-lg">{currentSong.maker}</p>
                        <p className="mt-2 whitespace-pre-line overflow-y-auto max-h-80">
                            {currentSong.lyrics}
                        </p>
                    </div>
                </div>
            )}

            <Footer bgColor="bg-mikuCyan" textColor="text-mikuBlack" />
        </div>
    );
}
