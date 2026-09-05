export type GuideImage = Readonly<{
  src: string;
  alt: string;
  width: number;
  height: number;
}>;

export type GuideStep = Readonly<{
  title: string;
  body: string;
  images?: readonly GuideImage[];
  note?: string;
}>;

export type GuidePlatform = "windows" | "mac";

export type GuideDownloadItemId = "coeiroink" | "voice-pack" | "open-maita";

export type GuideDownloadItem = Readonly<{
  id: GuideDownloadItemId;
  name: string;
  description: string;
  href: string;
  external: boolean;
  buttonLabel: string;
  note?: string;
  tracksDownload?: boolean;
}>;

export const coeiroinkDownloads = {
  coeiroinkOfficial: "https://coeiroink.com/download",
  voicePack:
    "https://github.com/Arpeggio39/MaitaCOEIROINK/releases/latest/download/bionmaita-1.0.0.zip",
  openMaita:
    "https://github.com/Arpeggio39/MaitaCOEIROINK/releases/latest/download/OpenMaita-Setup-1.8.0.exe",
  releasesPage: "https://github.com/Arpeggio39/MaitaCOEIROINK/releases",
} as const;

const guideImageBase = "/images/maita/COEIROINK/guide";

function img(
  filename: string,
  alt: string,
  width: number,
  height: number,
): GuideImage {
  return {
    src: `${guideImageBase}/${filename}`,
    alt,
    width,
    height,
  };
}

export const coeiroinkGuideIntro = {
  title: "COEIROINK 導入ガイド",
  subtitle: "琵音マイタの音声モデルを COEIROINK で使うための手順です。",
  aboutTitle: "COEIROINK とは？",
  aboutBody:
    "人間（六素先輩）の声をAIが学習し、まるで本人が喋っているかのような流暢さでAIに歌ってもらうことができるソフトウェアです！",
  aboutNote:
    "自由に日本語を喋ってもらうことは可能ですが...もちろん悪用ダメゼッタイ...☠️",
  aboutExtra:
    "あくまでナレーション特化なので、UTAUのマイタとは声の雰囲気が異なります...👀",
  downloadTitle: "まず用意するもの",
} as const;

const coeiroinkDownloadDescriptions: Record<GuidePlatform, string> = {
  windows:
    "公式サイトからお使いの PC に合った版をダウンロードします。NVIDIA グラボがある場合は GPU 版、ない場合は CPU 版（通常版）を選んでください。",
  mac: "公式サイトからお使いの Mac に合った版をダウンロードします。M シリーズ Mac なら Apple Silicon 版、Intel Mac なら Intel 版を選んでください。",
};

export function getDownloadItems(
  platform: GuidePlatform,
): readonly GuideDownloadItem[] {
  return [
    {
      id: "coeiroink",
      name: "COEIROINK 本体",
      description: coeiroinkDownloadDescriptions[platform],
      href: coeiroinkDownloads.coeiroinkOfficial,
      external: true,
      buttonLabel: "公式サイトへ",
    },
    {
      id: "voice-pack",
      name: "琵音マイタ 音声パック",
      description:
        "bionmaita-1.0.0.zip をダウンロードして解凍すると、bionmaita-1.0.0 フォルダーが入っています。",
      href: coeiroinkDownloads.voicePack,
      external: false,
      buttonLabel: "ダウンロード",
      tracksDownload: true,
    },
    {
      id: "open-maita",
      name: "OpenMaita（任意）",
      description:
        "COEIROINK で琵音マイタのナレーションを作るための Windows アプリです。GitHub から入手できます。",
      href: coeiroinkDownloads.openMaita,
      external: false,
      buttonLabel: "ダウンロード",
      note: "最新版は GitHub の Releases ページでも確認できます。",
      tracksDownload: true,
    },
  ];
}

export const coeiroinkGuideSteps: Record<GuidePlatform, readonly GuideStep[]> =
  {
    windows: [
      {
        title: "① COEIROINK をインストール",
        body: "公式サイトからダウンロードした ZIP を解凍し、フォルダー内のインストーラー（exe）を実行します。NVIDIA グラボがある場合は GPU 版、ない場合は CPU 版（通常版）を選んでください。",
        images: [
          img("image9.png", "COEIROINK インストーラー画面（1）", 1125, 634),
          img("image5.png", "COEIROINK インストーラー画面（2）", 1920, 1200),
        ],
      },
      {
        title: "② インストールフォルダーを開いておく",
        body: "同じフォルダーに追加でダウンロードされた黄色いフォルダーを開いておきます。後の手順で使います。",
        images: [
          img(
            "image8.png",
            "追加ダウンロードされた黄色いフォルダー",
            1125,
            634,
          ),
        ],
      },
      {
        title: "③ 音声パックをダウンロード",
        body: "GitHub から bionmaita-1.0.0.zip をダウンロードし、ZIP を解凍してください。",
        images: [
          img(
            "github-release-openmaita.png",
            "GitHub のダウンロードページ",
            2860,
            2004,
          ),
        ],
      },
      {
        title: "④ speaker_info に音声パックを入れる",
        body: "② で開いた COEIROINK フォルダー内の speaker_info フォルダーを開き、解凍した bionmaita-1.0.0 フォルダーをその中に入れます。",
        images: [
          img("image2.png", "speaker_info フォルダーを開く", 960, 1152),
          img(
            "image4.png",
            "bionmaita-1.0.0 を speaker_info に配置",
            1125,
            634,
          ),
        ],
        note: "もともと入っている「つくよみちゃん」は残しても削除しても大丈夫です。",
      },
      {
        title: "⑤ COEIROINK を起動",
        body: "1 つ上のフォルダーに戻り、COEIROINKv2.exe を実行します。この exe はフォルダーの外に移動しないでください。",
        images: [
          img("image16.png", "COEIROINK フォルダー内の exe", 1125, 634),
          img("image17.png", "COEIROINK 起動画面", 1000, 720),
        ],
      },
      {
        title: "⑥ マイタに切り替え",
        body: "画面上部のキャラクターアイコン（初期状態ではつくよみちゃん）を押すと、琵音マイタに切り替えられます。",
        images: [
          img("image11.png", "キャラクター切り替え", 1000, 711),
          img("image7.png", "マイタ選択後の画面", 1000, 711),
        ],
        note: "これで準備完了です。マイタのナレーションを作ってみましょう！",
      },
    ],
    mac: [
      {
        title: "① COEIROINK をインストール",
        body: "公式サイトからダウンロードした ZIP を解凍し、.app ファイルをアプリケーションフォルダーに移動します（必ず移動してください）。M シリーズ Mac なら Apple Silicon 版、Intel Mac なら Intel 版を選んでください。",
      },
      {
        title: "② LaunchPad から起動",
        body: "LaunchPad から COEIROINK を起動します。初回はセキュリティの警告が出ることがあります。",
        images: [
          img("image15.png", "LaunchPad から COEIROINK を起動", 323, 334),
          img("image6.png", "セキュリティ警告と「このまま開く」", 727, 848),
          img("image10.png", "「開く」ボタン", 272, 404),
          img("image12.png", "COEIROINK 起動", 1112, 832),
        ],
        note: "設定 → プライバシーとセキュリティ →「このまま開く」を押すと起動できます。",
      },
      {
        title: "③ 音声パックをダウンロード",
        body: "GitHub から bionmaita-1.0.0.zip をダウンロードし、ZIP を解凍してください。",
        images: [
          img(
            "github-release-openmaita.png",
            "GitHub のダウンロードページ",
            2860,
            2004,
          ),
        ],
      },
      {
        title: "④ speaker_info に音声パックを入れる",
        body: "アプリケーション内の COEIROINKv2.app を右クリック（2 本指クリック）し、「パッケージの内容を表示」→ Contents/MacOS/speaker_info を開き、bionmaita-1.0.0 フォルダーを入れます。",
        images: [
          img("image14.png", "COEIROINK.app のパッケージ内容を表示", 1130, 548),
          img(
            "image3.png",
            "speaker_info に bionmaita-1.0.0 を配置",
            1130,
            548,
          ),
        ],
      },
      {
        title: "⑤ マイタに切り替え",
        body: "COEIROINK を起動し、画面上部のキャラクターアイコンから琵音マイタに切り替えます。",
        images: [
          img("image13.png", "キャラクター切り替え（Mac）", 1112, 832),
          img("image1.png", "マイタ選択後の画面（Mac）", 1112, 832),
        ],
        note: "これで準備完了です。マイタのナレーションを作ってみましょう！",
      },
    ],
  };

export function getInstallSteps(platform: GuidePlatform): readonly GuideStep[] {
  return coeiroinkGuideSteps[platform];
}
