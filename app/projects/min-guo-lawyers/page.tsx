import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MinGuoLawyersPage() {
  return (
    <div className="pt-[120px] pb-[100px] min-h-screen">
      <div className="container-page">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-[#8F8F8F] hover:text-[#3A3A3A] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          返回项目列表
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-8">
          民国女律师史料研究项目
        </h1>
        
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-[600px] md:h-[800px]">
          <iframe 
            src="https://view.officeapps.live.com/op/embed.aspx?src=https://xiaxia-portfolio.vercel.app/projects/min-guo-lawyers.pptx" 
            width="100%" 
            height="100%" 
            frameBorder="0"
          >
            这是嵌入的 <a target="_blank" href="http://office.com">Microsoft Office</a> 演示文稿，由 <a target="_blank" href="http://office.com/webapps">Office</a> 提供支持。
          </iframe>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
          <p className="text-[#4A4A4A] leading-relaxed">
            注：由于 Office Online Viewer 需要公网可访问的 URL 才能渲染文件，如果您在本地预览时无法看到 PPT 内容，这是正常现象。部署到 Vercel 或其他公网环境后即可正常显示。
          </p>
        </div>
      </div>
    </div>
  );
}
