"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@content/siteContent";
import { ScrollReveal } from "@components/ScrollReveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-[160px] pb-[80px] md:pt-[200px] md:pb-[100px] min-h-[80vh] flex items-center overflow-hidden"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-center">
          <ScrollReveal className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] text-[#8F8F8F] uppercase block mb-2">
                公关传播 & 品牌策略
              </span>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#3A3A3A] leading-[1.1]">
                {heroContent.name}
              </h1>
              <p className="text-lg text-[#8F8F8F] font-medium tracking-tight">
                品牌传播 · 公关 · 时尚与文化传播
              </p>
            </div>

            <div className="space-y-6 text-base text-[#4A4A4A] leading-relaxed max-w-xl font-medium">
              <p>专注于品牌传播、公关沟通与市场营销。</p>
              <p>拥有品牌舆情监测、双语内容创作、媒体沟通支持与活动执行经验。</p>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link
                href="/contact"
                className="bg-[#3A3A3A] text-white px-8 py-3 rounded-full text-[14px] font-medium tracking-wide hover:opacity-90 transition-all shadow-md hover:-translate-y-1"
              >
                联系我
              </Link>
              <Link
                href="/projects"
                className="bg-white text-[#3A3A3A] border border-gray-200 px-8 py-3 rounded-full text-[14px] font-medium tracking-wide hover:bg-gray-50 transition-all"
              >
                精选项目
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="order-1 md:order-2">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="aspect-[4/5] relative max-h-[520px]">
                  <Image
                    src="/images/profile.jpg"
                    alt={heroContent.name}
                    fill
                    sizes="(min-width: 1024px) 520px, (min-width: 768px) 400px, 100vw"
                    className="object-cover transition-all duration-1000"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

