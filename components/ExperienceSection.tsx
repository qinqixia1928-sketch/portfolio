"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@components/Section";
import { prExperiences, fashionEventExperience } from "@content/siteContent";
import { ScrollReveal } from "@components/ScrollReveal";
import { 
  BarChart, 
  PenLine, 
  Globe, 
  Search, 
  Building2, 
  Star,
  FileText,
  Users,
  Award,
  ArrowRight
} from "lucide-react";

const getIcon = (text: string) => {
  if (text.includes("报告") || text.includes("监测") || text.includes("report")) return <BarChart className="w-4 h-4" />;
  if (text.includes("撰写") || text.includes("稿") || text.includes("material") || text.includes("writing")) return <PenLine className="w-4 h-4" />;
  if (text.includes("海外") || text.includes("国家") || text.includes("overseas") || text.includes("countries")) return <Globe className="w-4 h-4" />;
  if (text.includes("调研") || text.includes("分析") || text.includes("research")) return <Search className="w-4 h-4" />;
  return <Star className="w-4 h-4" />;
};

export function ExperienceSection() {
  const metrics = [
    { label: "份舆情报告", value: "30+", icon: <FileText className="w-5 h-5" /> },
    { label: "篇传播材料", value: "8+", icon: <PenLine className="w-5 h-5" /> },
    { label: "个国家调研", value: "10+", icon: <Globe className="w-5 h-5" /> },
    { label: "个品牌项目", value: "3+", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <Section id="experience" navId="experience" className="py-[100px]">
      <div className="container-page">
        <ScrollReveal className="mb-16">
          <span className="section-label text-[#8F8F8F]">EXPERIENCE 经历</span>
          <h2 className="section-title text-[#3A3A3A]">项目与实习经历</h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Timeline Column */}
          <div className="relative flex-1">
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#E8D7D2] hidden md:block" />

            <div className="space-y-12">
              {prExperiences.map((exp, index) => (
                <ScrollReveal key={exp.company} delay={index * 100} className="relative pl-0 md:pl-10">
                  <div className="absolute left-[0px] top-[12px] w-4 h-4 rounded-full bg-[#E8D7D2] z-10 hidden md:block" />
                  
                  <article className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-[#3A3A3A] tracking-tight group-hover:text-[#E8D7D2] transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-base font-medium text-[#4A4A4A] mt-1">
                            {exp.role}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-[#8F8F8F] shrink-0">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-[#4A4A4A] text-sm leading-relaxed">
                        {exp.summary}
                      </p>

                      <ul className="space-y-2 pt-2">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                            <span className="mt-1 text-[#E8D7D2] shrink-0">
                              {getIcon(h)}
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {exp.tags && (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full border border-[#E8D7D2] text-[12px] text-[#3A3A3A]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-6 border-t border-gray-50 mt-2">
                        <Link 
                          href="#contact"
                          className="flex items-center gap-2 text-sm font-semibold text-[#3A3A3A] group-hover:gap-3 transition-all"
                        >
                          了解详情 VIEW DETAILS <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}

              {/* Special Event Card */}
              <ScrollReveal delay={300} className="relative pl-0 md:pl-10">
                <div className="absolute left-[0px] top-[12px] w-4 h-4 rounded-full bg-[#E8D7D2] z-10 hidden md:block" />
                <article className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-[#3A3A3A] tracking-tight group-hover:text-[#E8D7D2] transition-colors">
                          {fashionEventExperience.company}
                        </h3>
                        <p className="text-base font-medium text-[#4A4A4A] mt-1">
                          {fashionEventExperience.role}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-[#8F8F8F] shrink-0">
                        {fashionEventExperience.period}
                      </span>
                    </div>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {fashionEventExperience.summary}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {fashionEventExperience.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                          <span className="mt-1 text-[#E8D7D2] shrink-0">
                            <Star className="w-4 h-4" />
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-gray-50 mt-4">
                      <Link 
                        href="#contact"
                        className="flex items-center gap-2 text-sm font-semibold text-[#3A3A3A] group-hover:gap-3 transition-all"
                      >
                        了解详情 VIEW DETAILS <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            </div>
          </div>

          {/* Metrics Column */}
          <aside className="w-full md:w-[280px]">
            <ScrollReveal delay={400} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm sticky top-32">
              <h3 className="text-[12px] font-bold tracking-widest text-[#8F8F8F] uppercase mb-8 text-center">
                关键成果 IMPACT
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="bg-[#FAF6F4] rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="text-[#3A3A3A] mb-2">
                      {metric.icon}
                    </div>
                    <p className="text-xl font-bold text-[#3A3A3A] mb-1">
                      {metric.value}
                    </p>
                    <p className="text-[11px] font-medium text-[#8F8F8F]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </Section>
  );
}

