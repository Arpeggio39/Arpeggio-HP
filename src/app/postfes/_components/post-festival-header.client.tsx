"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { postFestivalNavigation, type NavigationLink } from "@/data/navigation";

import styles from "./post-festival-header.module.css";

type PostFestivalNavigationLinkProps = Readonly<{
  item: NavigationLink;
  className?: string;
}>;

function PostFestivalNavigationLink({
  item,
  className = "",
}: PostFestivalNavigationLinkProps) {
  if (item.type === "external") {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export function PostFestivalHeader() {
  const blogItemRef = useRef<HTMLLIElement>(null);
  const blogButtonRef = useRef<HTMLButtonElement>(null);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  useEffect(() => {
    if (!isBlogOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        blogButtonRef.current?.focus();
        setIsBlogOpen(false);
      }
    }

    function closeOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !blogItemRef.current?.contains(event.target)
      ) {
        setIsBlogOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [isBlogOpen]);

  return (
    <header className="flex justify-center bg-black p-4 text-white sm:p-7">
      <nav aria-label="投稿祭ナビゲーション">
        <ul
          className={`${styles.navList} relative flex items-center gap-4 text-sm font-light tracking-widest sm:gap-8 sm:text-lg lg:gap-12`}
        >
          {postFestivalNavigation.map((item) => {
            if (item.type === "menu") {
              return (
                <li
                  ref={blogItemRef}
                  key={item.label}
                  data-open={isBlogOpen}
                  className={`${styles.blogItem} relative`}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setIsBlogOpen(false);
                    }
                  }}
                >
                  <button
                    ref={blogButtonRef}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isBlogOpen}
                    aria-controls="post-festival-blog-menu"
                    onClick={() => setIsBlogOpen((isOpen) => !isOpen)}
                    className="cursor-pointer transition-colors hover:text-miku-blue focus:text-miku-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-miku-blue"
                  >
                    {item.label}
                  </button>
                  <div
                    id="post-festival-blog-menu"
                    className={`${styles.dropdown} absolute top-full left-0 z-10 mt-2 rounded-lg bg-gray-800 text-white shadow-lg`}
                  >
                    <ul className="mt-5 mr-4 mb-3 ml-4 space-y-2">
                      {item.items.map((blogItem) => (
                        <li key={blogItem.href}>
                          <PostFestivalNavigationLink
                            item={blogItem}
                            className="block whitespace-nowrap transition-colors hover:text-miku-blue focus:text-miku-blue"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href} className={styles.navItem}>
                <PostFestivalNavigationLink
                  item={item}
                  className={`transition-colors ${
                    item.label === "ALBUM" || item.label === "琵音マイタ"
                      ? "hover:text-miku-pink focus:text-miku-pink"
                      : "hover:text-miku-blue focus:text-miku-blue"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
