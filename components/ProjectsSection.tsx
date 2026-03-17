"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@components/Section";
import { selectedProjects } from "@content/siteContent";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@components/ScrollReveal";

export function ProjectsSection() {
  return (
    <Section id="projects" navId="projects" className="py-[100px]">
      <div className="container-page">
        <ScrollReveal className="mb-16">
          <span className="section-label text-[#8F8F8F]">PROJECTS 项目</span>
          <h2 className="section-title text-[#3A3A3A]">精选项目</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {selectedProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <article
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image
                    src={project.image || `/images/project${index + 1}.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6 flex-1">
                    <p className="text-[12px] font-bold text-[#8F8F8F] uppercase tracking-widest mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold text-[#3A3A3A] mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-[#E8D7D2] text-[12px] text-[#3A3A3A]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-50">
                    <Link 
                      href={index === 0 ? "/projects/min-guo-lawyers" : "/projects/medical-recycling"}
                      className="flex items-center gap-2 text-sm font-semibold text-[#3A3A3A] group-hover:gap-3 transition-all"
                    >
                      查看项目 VIEW CASE <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
