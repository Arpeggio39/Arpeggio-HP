import "./globals.css";
import { InitialLoadProvider } from "@/contexts/InitialLoadContext";
import GlobalLoadingIndicator from "@/components/GlobalLoadingIndicator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <title>同志社VOCALOID研究会Arpeggio</title>
        <meta name="description" content="同志社VOCALOID研究会" />
      </head>
      <body className="antialiased">
        <InitialLoadProvider>
          <GlobalLoadingIndicator />
          {children}
        </InitialLoadProvider>
      </body>
    </html>
  );
}