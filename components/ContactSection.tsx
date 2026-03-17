import React from "react";
import { Section } from "@components/Section";
import { contactSection } from "@content/siteContent";
import { Mail, Phone, MessageSquare, ArrowRight, Download } from "lucide-react";
import { ScrollReveal } from "@components/ScrollReveal";

export function ContactSection() {
  return (
    <Section id="contact" navId="contact" className="py-[100px]">
      <div className="container-page">
        <ScrollReveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="section-label text-[#8F8F8F]">CONTACT 联系我</span>
          <h2 className="section-title text-[#3A3A3A] mb-6">一起合作吧</h2>
          <p className="text-[#4A4A4A] font-medium text-lg leading-relaxed">
            如果你对品牌传播、公关策划或文化研究项目感兴趣，欢迎与我联系。
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#3A3A3A] tracking-tight">
                当前状态
              </h3>
              <p className="text-base text-[#4A4A4A] leading-relaxed">
                目前正在寻找品牌、公关、内容策划及市场营销相关的工作机会。
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:qinqi.xia@outlook.com"
                className="flex-1 flex items-center justify-center gap-3 bg-[#E8D7D2] text-[#3A3A3A] rounded-full px-8 py-4 font-semibold hover:opacity-80 transition-all shadow-sm"
              >
                <Mail className="w-5 h-5" />
                邮件联系我
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex-1 flex items-center justify-center gap-3 bg-white border border-[#E8D7D2] text-[#3A3A3A] rounded-full px-8 py-4 font-semibold hover:bg-[#FAF6F4] transition-all shadow-sm"
              >
                <Download className="w-5 h-5" />
                下载简历
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={contactSection.email}
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#E8D7D2] transition-all text-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF6F4] flex items-center justify-center mb-4 mx-auto text-[#3A3A3A]">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-bold text-[#8F8F8F] uppercase tracking-widest mb-1">Email</p>
              <p className="text-[12px] font-bold text-[#3A3A3A] truncate">{contactSection.emailLabel}</p>
            </a>

            <div className="group bg-white p-6 rounded-2xl border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F4] flex items-center justify-center mb-4 mx-auto text-[#3A3A3A]">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-bold text-[#8F8F8F] uppercase tracking-widest mb-1">Phone</p>
              <p className="text-[12px] font-bold text-[#3A3A3A]">{contactSection.phoneLabel}</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F4] flex items-center justify-center mb-4 mx-auto text-[#3A3A3A]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-bold text-[#8F8F8F] uppercase tracking-widest mb-1">WeChat</p>
              <p className="text-[12px] font-bold text-[#3A3A3A]">{contactSection.wechatLabel}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

