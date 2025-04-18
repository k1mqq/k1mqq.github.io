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
      <head>
        {/* Cloudflare Web Analytics */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "99a5ec02fed64202915896f05dbf8cbd"}'></script>
      </head>
      
      <body
        className={`${zen_kaku_gothic_new.className} antialiased`}
      >
        <div className="bg-gradient-to-b from-cyan-900 via-slate-700 bg-fixed to-slate-800 bg-cover min-h-screen">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
