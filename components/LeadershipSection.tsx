import React from "react";
import { Section } from "@components/Section";
import { leadershipSection } from "@content/siteContent";
import { Trophy, Users, Globe, Target } from "lucide-react";
import { ScrollReveal } from "@components/ScrollReveal";

const getMetricIcon = (label: string) => {
  if (label.includes("活动")) return <Target className="w-5 h-5" />;
  if (label.includes("覆盖")) return <Users className="w-5 h-5" />;
  if (label.includes("合作")) return <Globe className="w-5 h-5" />;
  return <Trophy className="w-5 h-5" />;
};

export function LeadershipSection() {
  return (
    <Section id="leadership" navId="experience" className="py-[100px]">
      <div className="container-page">
        <ScrollReveal className="mb-16">
          <span className="section-label text-[#8F8F8F]">Leadership 领导力</span>
          <h2 className="section-title text-[#3A3A3A]">组织与领导力</h2>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1fr,400px]">
          <ScrollReveal className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FAF6F4] border border-[#E8D7D2] rounded-full w-fit">
              <div className="w-2 h-2 rounded-full bg-[#E8D7D2]" />
              <p className="text-[11px] font-bold text-[#3A3A3A] uppercase tracking-widest">
                {leadershipSection.role}
              </p>
            </div>
            <p className="text-xl text-[#4A4A4A] leading-relaxed font-semibold italic">
              {leadershipSection.description}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 h-full">
            {leadershipSection.metrics.map((metric, index) => (
              <ScrollReveal
                key={metric.label}
                delay={index * 100}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#E8D7D2] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF6F4] flex items-center justify-center text-[#3A3A3A] mb-6">
                  {getMetricIcon(metric.label)}
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-tight text-[#3A3A3A] mb-1">
                    {metric.value}
                  </p>
                  <p className="text-[10px] font-bold tracking-widest text-[#8F8F8F] uppercase">
                    {metric.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

