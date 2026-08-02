"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { siteNavigation, type NavigationLink } from "@/data/navigation";

type NavigationItemProps = Readonly<{
  item: NavigationLink;
  className: string;
  onNavigate?: () => void;
}>;

function NavigationItem({ item, className, onNavigate }: NavigationItemProps) {
  if (item.type === "external") {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

function BrandLink({ onNavigate }: Readonly<{ onNavigate?: () => void }>) {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 transition-opacity hover:opacity-80"
      onClick={onNavigate}
    >
      <Image
        src="/images/brand/arpeggio-mark.webp"
        alt="Arpeggio Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="text-lg font-light tracking-widest text-black">
        Arpeggio
      </span>
    </Link>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function SiteHeader() {
  const menuDialogRef = useRef<HTMLDialogElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const dialog = menuDialogRef.current;
    if (isMenuOpen && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        menuDialogRef.current?.close();
      }
    }

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    const dialog = menuDialogRef.current;
    if (dialog?.open) {
      dialog.close();
      return;
    }

    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-40 flex w-full justify-center bg-transparent text-black">
        <div className="relative mt-6 h-16 w-[91.6667%] max-w-4xl overflow-hidden rounded-3xl border border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-6 py-3">
            <BrandLink />

            <nav
              className="hidden space-x-4 lg:flex"
              aria-label="メインナビゲーション"
            >
              {siteNavigation.map((item) => (
                <NavigationItem
                  key={item.href}
                  item={item}
                  className="rounded-lg px-4 py-2 font-light tracking-widest text-black transition-colors hover:text-pink-500"
                />
              ))}
            </nav>

            <button
              type="button"
              onClick={openMenu}
              className="-m-2 p-2 text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-dialog"
              aria-label="メニューを開く"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={menuDialogRef}
        id="mobile-navigation-dialog"
        aria-label="モバイルナビゲーション"
        className="fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:backdrop-blur-xs lg:hidden"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeMenu();
          }
        }}
        onClose={() => setIsMenuOpen(false)}
      >
        <div className="pointer-events-none flex w-full justify-center">
          <div className="pointer-events-auto relative mt-6 h-[320px] w-[91.6667%] max-w-4xl overflow-hidden rounded-3xl border border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-6 py-3">
              <BrandLink onNavigate={closeMenu} />
              <button
                type="button"
                autoFocus
                onClick={closeMenu}
                className="-m-2 p-2 text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                aria-label="メニューを閉じる"
              >
                <CloseIcon />
              </button>
            </div>

            <nav
              aria-label="モバイルナビゲーション"
              className="mt-4 flex flex-col items-start space-y-3 px-6 pb-6"
            >
              {siteNavigation.map((item) => (
                <NavigationItem
                  key={item.href}
                  item={item}
                  className="text-lg font-light tracking-widest text-black transition-colors hover:text-pink-500"
                  onNavigate={closeMenu}
                />
              ))}
            </nav>
          </div>
        </div>
      </dialog>
    </>
  );
}
