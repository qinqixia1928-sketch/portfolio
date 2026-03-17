import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Noto_Sans_SC } from "next/font/google";
import { Navbar } from "@components/Navbar";
import { SectionObserverProvider } from "@components/SectionObserverProvider";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "夏沁琦 | 品牌传播 · 公关 · 时尚与文化传播个人网站",
  description:
    "夏沁琦 · 专注于品牌传播、公关沟通与文化内容表达的候选人。展示品牌与公关实习经历、时尚活动经验、研究项目与技能结构的个人品牌网站。",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={notoSansSC.variable}>
      <body className="antialiased font-sans bg-[#FAF6F4] text-[#4A4A4A] min-h-screen flex flex-col">
        <SectionObserverProvider>
          <Navbar />
          <main className="flex-1 max-w-6xl mx-auto px-8 w-full">{children}</main>
          <footer className="border-t border-gray-100 mt-20">
            <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-bold text-[#3A3A3A] tracking-tight">
                  夏沁琦 XIA QINQI
                </p>
                <p className="text-sm text-[#8F8F8F] mt-1">
                  Brand Communication · PR · Fashion Culture
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <p className="text-[11px] font-bold tracking-widest text-[#8F8F8F] uppercase">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </SectionObserverProvider>
      </body>
    </html>
  );
}

