# Arpeggio Homepage

同志社大学 VOCALOID 研究会 Arpeggio の公式ホームページです。

- 公開サイト: <https://arpeggio393.web.app/>
- 開発ガイド: [GUIDE_CURSOR.md](./GUIDE_CURSOR.md)

## 技術構成

- Next.js App Router / React / TypeScript
- Tailwind CSS
- pnpm
- Static Export (`output: "export"`)
- Firebase Hosting
- Node.js 26

## セットアップ

```bash
nvm use
corepack enable
pnpm install --frozen-lockfile
pnpm run dev
```

開発サーバーは <http://localhost:3004> で起動します。

## コマンド

```bash
pnpm run dev          # 開発サーバー
pnpm run lint         # ESLint
pnpm run typecheck    # TypeScript
pnpm run format       # Prettierで自動整形
pnpm run format:check # 整形差分の検査
pnpm run build        # out/へ静的サイトを出力
pnpm run audit        # 依存パッケージの脆弱性検査
```

## ディレクトリ構成

```text
src/
├── app/                         # ページとルート固有コンポーネント
│   ├── _components/             # トップページ専用コンポーネント
│   ├── album/_components/       # アルバム画面の操作UI
│   ├── maita/_components/       # 琵音マイタ画面の操作UI
│   ├── members/[memberId]/      # 動的セグメントを静的生成するメンバー詳細
│   └── ...
├── components/
│   ├── layout/                  # 全ページ共通レイアウト
│   └── ui/                      # 再利用可能な小さなUI
└── data/                        # 型定義と静的コンテンツ
    └── albums/                  # アルバムごとのデータ
```

ページは Server Component を標準とし、状態・イベント・ブラウザ API が必要な部分だけを `*.client.tsx` に分離しています。静的コンテンツはクラスではなく、`src/data` の型付きプレーンオブジェクトで管理します。

## コンテンツの追加場所

- アルバム: `src/data/albums/`
- メンバー: `src/data/members.ts`
- 活動チーム: `src/data/groups.ts`
- 琵音マイタ音源: `src/data/maita.ts`
- 5周年企画: `src/data/anniversary.ts`

`pnpm run build` が成功すると、Firebase Hosting に配置できる完全な静的サイトが `out/` に生成されます。
