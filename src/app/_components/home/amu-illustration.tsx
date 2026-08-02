import Image from "next/image";

const illustrationDimensions = {
  "/images/illustrations/amu/hatsune.webp": { width: 640, height: 640 },
  "/images/illustrations/amu/roki.webp": { width: 640, height: 360 },
  "/images/illustrations/amu/si-e.webp": { width: 640, height: 623 },
} as const;

type AmuIllustrationProps = Readonly<{
  src: keyof typeof illustrationDimensions;
  alt: string;
  frameClassName?: string;
  imageClassName: string;
  preload?: boolean;
}>;

export function AmuIllustration({
  src,
  alt,
  frameClassName = "",
  imageClassName,
  preload = false,
}: AmuIllustrationProps) {
  const { width, height } = illustrationDimensions[src];

  return (
    <div className={`flex flex-col items-center ${frameClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        preload={preload}
        className={`rounded-lg object-contain shadow-md ${imageClassName}`}
      />
      <p className="mt-1.5 text-center text-[11px] text-gray-500">© あむ</p>
    </div>
  );
}
