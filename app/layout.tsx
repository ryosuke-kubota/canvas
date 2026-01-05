import "../public/css/styles.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});
export const metadata: Metadata = {
  title: "Canvas - Web3コンサルティング・グローバルマーケティング",
  description:
    "Canvas - Web3コンサルティング・グローバルマーケティング",
  openGraph: {
    title: "Canvas - Web3コンサルティング・グローバルマーケティング",
    description:
      "Web3への進出を支援するためのコンサルティング・開発・グローバルマーケティングを行なっております。",
    images: [
      {
        url: "https://renew.canva3.jp/img/ogp.png",
        width: 1200,
        height: 630,
        alt: "Canvas",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas - Web3コンサルティング・グローバルマーケティング",
    description:
      "Web3への進出を支援するためのコンサルティング・開発・グローバルマーケティングを行なっております。",
    images: ["https://renew.canva3.jp/img/ogp.png"],
  },
  other: {
    "theme-color": "#161616",
  },
};
const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);
  } catch(e) {}
})();
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ja" className={`no-touch ${notoSansJP.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
