# Kanta Numa Portfolio

Kanta Numa のポートフォリオサイトです。
Next.js 14, TypeScript, Tailwind CSS を使用して構築されています。

## プロジェクト概要

BtoBビジネスグロースパートナーとしての経歴、スキル、価値観を紹介する個人ウェブサイトです。
多言語対応（日本語/英語）しており、国内外の閲覧者を想定しています。

**Live Site:** https://kanta-portfolio.vercel.app/

## 機能・特徴

*   **レスポンシブデザイン**: スマートフォンからデスクトップまで最適化された表示。
*   **多言語対応**: 日本語と英語の切り替え機能（Context APIを使用）。
*   **アニメーション**: Framer Motionを使用したスムーズなスクロールアニメーションとインタラクション。
*   **コンポーネント指向**: 再利用可能なUIコンポーネント設計。
*   **資格リスト**: アコーディオン形式で展開可能な資格一覧。
*   **トップへ戻るボタン**: スクロール時に表示されるスムーズな移動ボタン。

## 技術スタック

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Deployment**: [Vercel](https://vercel.com/)

## ローカル開発環境のセットアップ

1.  **リポジトリのクローン**
    ```bash
    git clone https://github.com/kannumata/kanta-portfolio.git
    cd kanta-portfolio
    ```

2.  **依存関係のインストール**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **開発サーバーの起動**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **ブラウザで確認**
    [http://localhost:3000](http://localhost:3000) (または表示されたポート) にアクセスしてください。

## ライセンス

[MIT](https://choosealicense.com/licenses/mit/)
