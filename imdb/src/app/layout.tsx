import "./globals.css";
import Head from "next/head";

import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*Header*/}
        <Header />
        {/*Navbar*/}

        {/*Search Box*/}

        {children}
      </body>
    </html>
  );
}
