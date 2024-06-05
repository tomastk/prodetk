import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import { Header } from "./components";
import NextTopLoader from "nextjs-toploader";

const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prodetk",
  description: "La plataforma de prode en tu ciudad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.className} spaced-content`}>
        <NextTopLoader />
        <Header />
        {children}
      </body>
    </html>
  );
}
