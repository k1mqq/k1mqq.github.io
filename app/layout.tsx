import type { Metadata } from "next";
import "./globals.css";
import { zen_kaku_gothic_new } from "@/app/ui/fonts"
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "k1mq is here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      
      <body
        className={`${zen_kaku_gothic_new.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
