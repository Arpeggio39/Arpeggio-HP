"use client"; // これを追加

import Head from 'next/head';
import { useState, useEffect } from 'react';
import NextLink from 'next/link'

export default function Home() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 10) { // 100pxスクロールしたら
                setScrollOpacity(0);
            } else {
                setScrollOpacity(1);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            const dropdown = document.getElementById('dropdown-menu');
            const blogMenuItem = document.getElementById('blog-menu-item');

            if (dropdown && blogMenuItem) {
                const rect = dropdown.getBoundingClientRect();
                const blogRect = blogMenuItem.getBoundingClientRect();

                if (
                    event.clientX < rect.left ||
                    event.clientX > rect.right ||
                    event.clientY < rect.top ||
                    event.clientY > rect.bottom
                ) {
                    if (
                        event.clientX < blogRect.left ||
                        event.clientX > blogRect.right ||
                        event.clientY < blogRect.top
                    ) {
                        setDropdownOpen(false);
                    }
                }
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDropdownOpen]);

    return (
        <>
            <Head>
                <title>Arpeggio</title>
            </Head>
            <header className="bg-black text-white flex justify-center p-7">
                <nav>
                    <ul className="flex space-x-12 text-lg font-light relative tracking-widest">
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/" className="hover:text-mikuBlue transition-colors">TOP</NextLink>
                        </li>
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/album" className="hover:text-mikuPink transition-colors">ALBUM</NextLink>
                        </li>
                        <li
                            id="blog-menu-item"
                            onMouseEnter={() => setDropdownOpen(true)}
                            className="relative">
                            <a href="#" className="hover:text-mikuBlue transition-colors">BLOG</a>
                            {isDropdownOpen && (
                                <div
                                    id="dropdown-menu"
                                    className="absolute top-full mt-2 bg-gray-800 text-white rounded-lg shadow-lg"
                                >
                                    <ul className="mt-5 space-y-2 pr-4 ml-4 mb-3">
                                        <li><a href="https://note.com/arpeggiovocaloid/n/ndd0cf9f50ba5" target="_blank" rel="noopener noreferrer" className="hover:text-mikuBlue block">note</a></li>
                                        <li><a href="http://arpeggiod.blog90.fc2.com/" target="_blank" rel="noopener noreferrer" className="hover:text-mikuBlue block">fc2</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/maita" className="hover:text-mikuPink transition-colors">琵音マイタ</NextLink>
                        </li>
                        <li className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-20' : 'opacity-100'}`}>
                            <NextLink href="/postfes" className="hover:text-mikuBlue transition-colors">投稿祭</NextLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="bg-black text-white flex flex-col items-center justify-center py-20 min-h-screen tracking-lwidest">
                <h1 className="text-8xl font-bold animate-fadeInUp delay-100">Arpeggio投稿祭</h1>
                <p className="text-2xl font-light mt-10 animate-fadeInUp delay-300">同志社VOCALOID研究会</p>
                <p
                    className="absolute bottom-10 text-lg animate-bouncePulse transition-opacity duration-500"
                    style={{ opacity: scrollOpacity }}
                >
                    ↓下にスクロール↓
                </p>
            </div>

            <div className="bg-black text-white flex flex-col items-center justify-center pb-10 tracking-wider">
                <h2 className="text-4xl font-bold">Arpeggioって何をするサークル？</h2>
                <p className="text-xl mt-5 ">
                    ArpeggioはVOCALOIDをはじめ、イラストや映像、ダンスなどの様々な創作活動を制作しているサークルです
                </p>
                <a href="#" className="mt-10 bg-mikuBlue text-white px-6 py-3 rounded-lg hover:bg-mikuPink tracking-wider transition-colors">
                    Arpeggioの過去の作品一覧はこちら
                </a>
            </div>

            <div className="bg-black text-white flex flex-col items-center justify-center py-10 tracking-wider">
                <h2 className="text-4xl font-bold">Arpeggioにはどんな人がいるの？？</h2>
                <p className="text-xl mt-5 ">
                    Arpeggioはとにかく面白い人や歌が上手な人、神絵師さんなど、個性豊かな人たちがたくさんいます
                </p>
                <div className="flex space-x-4 mt-10">
                    <a href="https://note.com/arpeggiovocaloid/n/ndd0cf9f50ba5" target="_blank" rel="noopener noreferrer" className="bg-mikuBlue text-white px-6 py-3 rounded-lg hover:bg-mikuPink transition-colors">
                        noteブログ
                    </a>
                    <a href="http://arpeggiod.blog90.fc2.com/" target="_blank" rel="noopener noreferrer" className="bg-mikuBlue text-white px-6 py-3 rounded-lg hover:bg-mikuPink transition-colors">
                        fc2ブログ
                    </a>
                </div>
            </div>

            <div className="bg-black text-white flex flex-col items-center justify-center py-10 tracking-wider">
                <h2 className="text-4xl font-bold">Arpeggioに興味がある！</h2>
                <p className="text-xl mt-5 ">
                    Arpeggioの活動詳細やコンタクトはXやInstagramから受け付けています。ぜひDMにてご連絡ください！
                </p>
                <div className="flex space-x-4 mt-10">
                    <a href="https://twitter.com/arpeggio_kouhou" target="_blank" rel="noopener noreferrer" className="bg-mikuBlue text-white px-6 py-3 rounded-lg hover:bg-mikuPink transition-colors">
                        X (Twitter)
                    </a>
                    <a href="https://www.instagram.com/arpeggio_kouhou/" target="_blank" rel="noopener noreferrer" className="bg-mikuBlue text-white px-6 py-3 rounded-lg hover:bg-mikuPink transition-colors">
                        インスタ
                    </a>
                </div>
            </div>

        </>
    );
}