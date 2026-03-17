import React from "react";
import { Section } from "@components/Section";
import { aboutContent } from "@content/siteContent";
import { ScrollReveal } from "@components/ScrollReveal";

export function AboutSection() {
  return (
    <Section id="about" navId="about" className="py-[100px]">
      <div className="container-page">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 md:items-start">
          <ScrollReveal className="space-y-8">
            <div>
              <span className="section-label text-[#8F8F8F]">About 关于我</span>
              <h2 className="section-title text-[#3A3A3A]">个人简介</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[#4A4A4A] font-medium">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="space-y-10 md:pt-16">
            <div className="space-y-4 border-l-2 border-[#E8D7D2] pl-6">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8F8F8F]">
                Focus & Strengths
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed font-semibold italic">
                以品牌传播、公关与文化叙事为核心，将
                <span className="text-[#3A3A3A] underline decoration-[#E8D7D2] decoration-4 underline-offset-4 mx-1">研究、内容与现场活动</span>
                连接为一体的综合能力结构。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Brand Communication", "Media Relations", "Market Research", "AI Research"].map(
                (item) => (
                  <div
                    key={item}
                    className="group rounded-xl border border-gray-200 bg-white p-5 space-y-2 shadow-sm hover:border-[#E8D7D2] transition-all duration-300"
                  >
                    <p className="text-[9px] font-bold tracking-[0.2em] text-[#8F8F8F] uppercase">
                      领域
                    </p>
                    <p className="text-sm font-bold text-[#3A3A3A]">{item}</p>
                  </div>
                ),
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

