import Image from "next/image";

export type SiteFooterProps = Readonly<{
  variant?: "light" | "dark" | "cyan";
  className?: string;
}>;

const variantClassNames = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
  cyan: "bg-miku-cyan text-miku-black",
} as const;

export function SiteFooter({
  variant = "light",
  className = "",
}: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative z-10 py-4 text-center ${variantClassNames[variant]} ${className}`}
    >
      <div className="mb-4 flex items-center justify-center gap-6">
        <a
          href="https://twitter.com/arpeggio_kouhou"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-white! transition-colors duration-200 hover:bg-gray-800"
          aria-label="ArpeggioのXを見る"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href="https://doshishavocaloid.booth.pm/items/8409319"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center opacity-90 transition-opacity duration-200 hover:opacity-100"
          aria-label="ArpeggioのBOOTHを見る"
        >
          <Image
            src="/icons/booth_logo.svg"
            alt="BOOTH"
            width={112}
            height={40}
            className="h-8 w-auto"
          />
        </a>
      </div>

      <p className="font-medium">
        &copy; 2024-{currentYear} VOCALOID研究会Arpeggio
      </p>
    </footer>
  );
}
