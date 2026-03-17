import React from "react";
import { Section } from "@components/Section";
import { skillsSection } from "@content/siteContent";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@components/ScrollReveal";

export function SkillsSection() {
  return (
    <Section id="skills" navId="skills" className="py-[100px]">
      <div className="container-page">
        <ScrollReveal className="mb-16">
          <span className="section-label text-[#8F8F8F]">SKILLS 技能</span>
          <h2 className="section-title text-[#3A3A3A]">技能与工具</h2>
        </ScrollReveal>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsSection.categories.map((cat, index) => (
            <ScrollReveal key={cat.name} delay={index * 100}>
              <article
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col h-full hover:border-[#E8D7D2] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#3A3A3A] mb-6">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="bg-[#FAF6F4] border border-[#E8D7D2] rounded-full px-3 py-1 text-sm text-[#3A3A3A]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

