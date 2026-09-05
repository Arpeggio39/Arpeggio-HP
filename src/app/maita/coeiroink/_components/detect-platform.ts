export type DetectedPlatform = "windows" | "mac" | "unknown";

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: { platform?: string };
};

export function getDetectedPlatform(): DetectedPlatform {
  if (typeof navigator === "undefined") {
    return "unknown";
  }

  const userAgent = navigator.userAgent;
  const platform =
    (navigator as NavigatorWithUserAgentData).userAgentData?.platform ??
    navigator.platform ??
    "";

  if (
    platform === "Windows" ||
    /Win/i.test(platform) ||
    /Windows/i.test(userAgent)
  ) {
    return "windows";
  }

  if (
    platform === "macOS" ||
    /Mac/i.test(platform) ||
    /Macintosh/i.test(userAgent)
  ) {
    return "mac";
  }

  return "unknown";
}

export function getDetectedPlatformLabel(platform: DetectedPlatform): string {
  switch (platform) {
    case "windows":
      return "Windows";
    case "mac":
      return "Mac";
    case "unknown":
      return "不明";
    default: {
      const _exhaustive: never = platform;
      return _exhaustive;
    }
  }
}
