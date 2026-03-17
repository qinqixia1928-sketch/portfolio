import React from "react";
import Image from "next/image";
import { Section } from "@components/Section";
import { selectedProjects } from "@content/siteContent";
import { ScrollReveal } from "@components/ScrollReveal";

export function ProjectsSection() {
  return (
    <Section id="projects" navId="projects" className="py-[100px]">
      <div className="container-page">
        <ScrollReveal className="mb-16">
          <span className="section-label text-[#8F8F8F]">PROJECTS 项目</span>
          <h2 className="section-title text-[#3A3A3A]">精选项目</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-auto">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={project.image || `/images/project${index + 1}.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 space-y-3 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#3A3A3A]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-[#E8D7D2] text-[12px] text-[#3A3A3A]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t mt-4 pt-4" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
