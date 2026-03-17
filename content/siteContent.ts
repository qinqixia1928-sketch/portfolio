export type NavItemId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export const navItems: { id: NavItemId; label: string; href: string }[] = [
  { id: "home", label: "首页", href: "/" },
  { id: "about", label: "关于我", href: "/about" },
  { id: "experience", label: "经历", href: "/experience" },
  { id: "projects", label: "项目", href: "/projects" },
  { id: "skills", label: "技能", href: "/skills" },
  { id: "contact", label: "联系我", href: "/contact" }
];

export const heroContent = {
  name: "夏沁琦",
  title: "公关传播｜品牌内容｜市场调研",
  intro: [
    "我是一名专注于品牌传播、公关沟通与文化内容表达的传播学背景候选人。拥有品牌舆情监测、双语内容创作、媒体沟通支持与活动执行经验，同时持续关注行业动态、消费者行为与流行文化如何影响品牌叙事与公众认知。",
    "我希望在品牌、公关与市场调研领域探索品牌如何通过内容、活动与文化叙事建立长期影响力。"
  ],
  tags: ["品牌传播", "媒体关系", "市场调研", "AI辅助研究"],
  resumeLink: "#", // TODO: 替换为在线简历 PDF 链接
  primaryActions: [
    { label: "查看简历", target: "resume", type: "link" as const },
    { label: "精选项目", target: "projects", type: "scroll" as const },
    { label: "联系我", target: "contact", type: "scroll" as const }
  ]
};

export const aboutContent = {
  title: "关于我",
  paragraphs: [
    "我目前就读于新南威尔士大学公关与广告硕士，本科为传播学专业。我的学习方向结合了媒体传播与商业营销，通过跨学科课程系统学习市场分析方法与策略模型，逐步建立起传播与商业并重的思维框架。",
    "我长期关注行业动态、消费者行为与流行文化，对粉丝经济、品牌叙事及其在媒介环境中的运作方式具有持续兴趣，使我能够从文化与市场双重视角理解品牌传播。",
    "同时，我也探索技术在营销中的应用，自学AI工具与基础开发能力，能够完成简单应用demo与个人网站设计。"
  ],
  highlightCapabilities: ["品牌传播", "媒体关系", "市场调研", "AI辅助研究"],
  focusCards: [
    { title: "Brand Communication", subtitle: "品牌传播" },
    { title: "Media Relations", subtitle: "媒体关系" },
    { title: "Market Research", subtitle: "市场调研" },
    { title: "AI Research", subtitle: "AI辅助研究" }
  ]
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags?: string[];
};

export const prExperiences: ExperienceEntry[] = [
  {
    company: "蓝色光标传媒集团",
    role: "海外品牌传播支持",
    period: "2024.08 — 2024.12",
    summary:
      "参与多个品牌的海外传播项目支持，负责舆情监测、双语内容撰写与竞品调研。",
    highlights: [
      "撰写并整理30+舆情监测报告，分析品牌传播环境",
      "撰写8+中英双语新闻稿与媒体沟通材料",
      "调研10+国家广告位投放情况，支持海外投放策略",
      "参与品牌竞品研究与行业趋势分析项目"
    ],
    tags: ["舆情监测", "双语写作", "竞品分析", "海外传播"]
  },
  {
    company: "华扬联众",
    role: "公关助理",
    period: "2022.07 — 2022.10",
    summary: "参与品牌营销与公关项目执行支持。",
    highlights: [
      "协助整理年度营销策划方案",
      "支持新品发布活动执行与流程协调",
      "参与项目数据整理与传播效果分析"
    ],
    tags: ["活动执行", "传播策划", "效果分析"]
  },
  {
    company: "煊麦公关",
    role: "公关助理",
    period: "2021.10 — 2021.12",
    summary: "参与医药行业客户传播项目支持。",
    highlights: [
      "协助线上峰会活动执行",
      "管理客户相关数据与资料",
      "支持活动流程与现场协调"
    ],
    tags: ["活动支持", "客户管理", "流程协调"]
  }
];

export const fashionEventExperience = {
  title: "时尚与活动相关经历",
  company: "晒丫红人之夜 SIFS 特别活动",
  role: "场地助理",
  period: "2021.10 — 2021.11",
  summary: "参与时尚活动现场执行与流程协调。",
  highlights: [
    "与演出总监协作制定排练计划并支持现场执行",
    "协调组织方与赞助商需求，根据合作协议安排舞台前厅位置",
    "支持活动现场流程协调与空间安排"
  ],
  reflection:
    "这次经历让我更加直观地理解时尚活动与品牌传播在现场执行层面的运作方式，也让我对时尚行业与品牌活动产生持续兴趣。"
};

export const fashionCultureFocus = [
  {
    title: "时尚活动观察",
    description:
      "参与时尚活动现场执行，对活动流程、空间安排与品牌呈现有实际观察经验。"
  },
  {
    title: "明星传播与粉丝文化",
    description:
      "持续关注明星传播、粉丝文化与品牌合作案例，对娱乐营销与受众情绪传播具有浓厚兴趣。"
  },
  {
    title: "品牌文化叙事",
    description:
      "关注品牌如何通过活动、视觉表达与文化符号建立品牌识别度与情感连接。"
  }
];

export const selectedProjects = [
  {
    title: "民国女性律师史料研究项目",
    subtitle: "历史资料研究与数据库构建",
    summary:
      "围绕民国时期女性律师历史资料开展研究，并构建相关史料数据库。",
    highlights: [
      "收集并整理历史档案与文献资料",
      "使用AI辅助进行文本定性分析",
      "构建研究数据库并完成三万字研究报告"
    ],
    image: "/images/project1.jpg",
    imageAlt: "民国女性律师史料研究项目占位图",
    tags: ["研究项目", "历史文献", "AI辅助分析"]
  },
  {
    title: "杜邦全国青年创业大赛｜医疗废弃物回收项目",
    subtitle: "可持续医疗废弃物回收商业方案",
    summary: "带领跨校团队设计医疗废弃物回收商业化方案。",
    highlights: [
      "调研30+医疗机构与回收渠道",
      "设计医疗废弃物回收商业模式",
      "项目进入全国六强"
    ],
    image: "/images/project2.jpg",
    imageAlt: "医疗废弃物回收项目占位图",
    tags: ["商业策划", "可持续发展", "团队协作"]
  }
];

export const leadershipSection = {
  title: "领导力与活动组织",
  role: "学生社团负责人",
  metrics: [
    { label: "组织校园活动", value: "10+" },
    { label: "学生参与覆盖", value: "500+" },
    { label: "合作机构", value: "6+" },
    { label: "高校联赛参赛者", value: "700+" }
  ],
  description:
    "在担任学生社团负责人期间，负责整体活动策划与执行，协调校内外资源，推动团队协作与对外合作。这一经历提升了我在活动组织、团队协调与资源沟通方面的能力。"
};

export const skillsSection = {
  title: "技能与工具",
  categories: [
    {
      name: "传播与内容能力",
      items: ["双语内容写作", "新闻稿撰写", "媒体沟通", "Pitch Letter 写作"]
    },
    {
      name: "公关与品牌传播",
      items: ["舆情监测", "竞品分析", "品牌传播支持", "活动执行"]
    },
    {
      name: "营销策略能力",
      items: ["SMART目标设定", "品牌定位", "数据驱动决策", "整合传播"]
    },
    {
      name: "市场调研",
      items: ["市场动态观察", "消费者行为研究", "趋势敏感度", "竞品分析"]
    },
    {
      name: "工具能力",
      items: ["Meltwater", "Similarweb", "Google Analytics"]
    },
    {
      name: "AI辅助能力",
      items: ["Cursor", "Claude", "Trae", "Gemini"]
    }
  ]
};

export const contactSection = {
  title: "联系方式",
  intro: "欢迎就品牌、公关、内容与市场调研相关机会与我联系。",
  status: "目前开放品牌、公关、内容与市场调研方向的实习与全职机会。",
  email: "mailto:qinqi.xia@outlook.com",
  emailLabel: "qinqi.xia@outlook.com",
  phone: "tel:18252696351",
  phoneLabel: "18252696351",
  wechatLabel: "18252696351"
};

