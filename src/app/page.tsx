"use client"; // これを追加

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { groups } from '../const/group/GroupList';

import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY > 10) {
        setScrollOpacity(0);
      } else {
        setScrollOpacity(1);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      className="min-h-screen bg-white text-black"
    >
      <Header
        bgColor="bg-white"
        textColor="text-black"
      />
      <div 
        className="flex flex-col items-center justify-center py-20 min-h-screen tracking-lwidest"
      >
        <div
          className="text-lg sm:text-2xl md:text-4xl text-center font-bold mt-4 text-black opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
        >
          同志社大学VOCALOID研究会
        </div>
        <div
          className="flex items-center justify-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <Image
            src="/clearLogo.png"
            alt="Arpeggio Logo"
            width={100}
            height={100}
            className="mr-4 mt-4 object-contain"
          />
          <span className="text-4xl text-center font-bold mt-4 text-black">Arpeggio</span>
        </div>
        <p
          className="absolute bottom-10 text-sm sm:text-lg animate-bouncePulse text-gray-600"
          style={{ opacity: scrollOpacity }}
        >
          ↓下にスクロール↓
        </p>
      </div>

      {/* Arpeggioって何をするサークル？ */}
      <div 
        className="flex flex-col items-center justify-center pb-10 tracking-wider pt-4 px-12"
      >
        <div className="max-w-4xl w-full text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Arpeggioって何をするサークル？</h2>
          
          <p className="text-base sm:text-lg md:text-xl mt-10">
            ArpeggioはVOCALOIDをはじめ合成音声に関する創作活動をしているサークルです！
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-10">
            以下の8個の班に分かれて活動しています！
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-5 max-w-2xl w-full">
          {groups.map((group) => (
            <div
              key={group.id}
              className="relative border-2 border-black min-h-[120px] transition-all duration-500"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 88% 0, 0 0)',
                backgroundColor: 'rgb(249 250 251)',
              }}
            >
              <div className="p-5 pr-24 relative">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{group.name}</h3>
                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-sm text-gray-600 min-w-0 flex-1 line-clamp-2 sm:line-clamp-none sm:hidden">
                    {group.description}
                  </p>
                  <div
                    className="hidden sm:block text-sm text-gray-600 overflow-hidden min-w-0 flex-1"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
                    }}
                  >
                    {group.description.slice(0, 20)}…
                  </div>
                  <Link
                    href="/activity"
                    className="text-sm sm:text-base font-semibold px-3 py-2 rounded-md bg-mikuBlue !text-white hover:bg-mikuPink transition-colors duration-200 shrink-0 self-end sm:self-auto"
                  >
                    詳しく見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="/activity"
          className="mt-10 font-semibold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors duration-200 bg-mikuBlue !text-white hover:bg-mikuPink"
        >
          各班の活動内容を見る
        </a>
      </div>

      {/* Arpeggioのキャラクター紹介 */}
      <div
        className="flex flex-col items-center justify-center py-10 tracking-wider px-10"
      >
        <div className="max-w-5xl w-full px-6 sm:px-8 md:px-10 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
            <div className="w-full md:w-[32%] flex justify-center">
              <Image
                src="/maita/Normal/portrait.png"
                alt="琵音マイタの立ち絵"
                width={384}
                height={860}
                className="w-40 sm:w-52 md:w-full h-auto object-contain"
              />
            </div>
            <div className="w-full md:flex-1 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">琵音マイタ</h2>
              <p className="text-base sm:text-lg md:text-xl mt-5 leading-relaxed">
                琵音マイタは、Arpeggioの創立10周年記念プロジェクトで生まれたキャラクターです。
              </p>
              <p className="text-base sm:text-lg md:text-xl mt-3 leading-relaxed">
                音楽と創作が大好きな元気いっぱいのメンバーとして親しまれています。詳しいプロフィールやビジュアルは、マイタページで紹介しています。
              </p>
              <Link
                href="/maita"
                className="inline-block mt-6 font-semibold text-base sm:text-lg px-5 sm:px-6 py-3 rounded-lg transition-colors duration-200 bg-maitaPurple !text-white hover:bg-maitaHoverPurple"
              >
                琵音マイタをもっと見る
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arpeggioにはどんな人がいるの？？ */}
      <div 
        className="flex flex-col items-center justify-center py-10 tracking-wider px-10"
      >
        <div className="max-w-4xl w-full text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Arpeggioにはどんな人がいるの？？</h2>
          <p className="text-base sm:text-lg md:text-xl mt-5">
            Arpeggioはとにかく面白い人や歌が上手な人、神絵師さんなど、個性豊かな人たちがたくさんいます
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <a 
            href="https://note.com/arpeggiovocaloid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl md:text-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg border-2 transition-colors duration-200 text-mikuBlue border-transparent hover:border-mikuPink"
          >
            noteブログ
          </a>
          <a 
            href="http://arpeggiod.blog90.fc2.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl md:text-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg border-2 transition-colors duration-200 text-mikuBlue border-transparent hover:border-mikuPink"
          >
            fc2ブログ
          </a>
        </div>
      </div>

      {/* Arpeggioに興味がある！ */}
      <div 
        className="flex flex-col items-center justify-center py-10 tracking-wider px-10"
      >
        <div className="max-w-4xl w-full text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Arpeggioに興味がある！</h2>
          <p className="text-base sm:text-lg md:text-xl mt-5">
            Arpeggioの活動詳細やコンタクトはXから受け付けています。ぜひDMにてご連絡ください！
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <a 
            href="https://twitter.com/arpeggio_kouhou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl md:text-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg bg-black !text-white transition-colors duration-200"
          >
            Xを見る
          </a>
        </div>
      </div>

      <Footer
        bgColor="bg-white"
        textColor="text-black"
      />
    </div>
  );
}