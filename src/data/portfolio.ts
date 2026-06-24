// ============================================================
//  이 파일만 고치면 포트폴리오 내용이 전부 바뀝니다.
//  (이름, 소개, 스킬, 경력, 프로젝트, 연락처)
// ============================================================

export const profile = {
  name: "장경훈",
  role: "Frontend / Software Engineer",
  tagline: "사용자에게 가치를 주는 제품을 만드는 개발자입니다.",
  location: "Seoul, Korea",
  email: "owndill19@gmail.com",
  // 비워두면 해당 버튼이 표시되지 않습니다.
  github: "https://github.com/your-username",
  linkedin: "",
  resumeUrl: "", // PDF 이력서 링크 (예: "/resume.pdf")
  about: [
    "여기에 본인 소개를 적으세요. 어떤 문제를 즐겨 푸는지, 어떤 기술 스택을 주로 쓰는지, 어떤 협업 스타일을 가졌는지 등을 2~3문단으로 풀어내면 좋습니다.",
    "최근에는 어떤 일에 관심이 있는지, 앞으로 어떤 개발자가 되고 싶은지로 마무리하면 인상이 좋습니다.",
  ],
};

export type Skill = { category: string; items: string[] };

export const skills: Skill[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "회사 / 팀 이름",
    role: "직무 (예: Frontend Engineer)",
    period: "2023.01 – 현재",
    description: "이 조직에서 맡았던 역할과 책임을 한 줄로 요약합니다.",
    highlights: [
      "구체적인 성과를 숫자와 함께 적으면 좋습니다 (예: 페이지 로드 40% 단축).",
      "어떤 기술/방법으로 어떤 문제를 해결했는지.",
    ],
  },
  {
    company: "이전 회사 / 프로젝트",
    role: "직무",
    period: "2021.06 – 2022.12",
    description: "또 다른 경력을 추가할 수 있습니다.",
    highlights: ["주요 성과 1", "주요 성과 2"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  // 비워두면 해당 링크 버튼이 표시되지 않습니다.
  liveUrl?: string;
  repoUrl?: string;
  // public/ 폴더 기준 이미지 경로 (예: "/projects/my-app.png"). 없으면 placeholder 표시.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "프로젝트 이름 A",
    description:
      "이 프로젝트가 무엇이고, 어떤 문제를 풀었으며, 내가 어떤 부분을 담당했는지 2~3문장으로 설명합니다.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-a",
    image: "",
  },
  {
    title: "프로젝트 이름 B",
    description:
      "두 번째 프로젝트 설명. 사용한 기술과 결과(사용자 수, 성능 개선 등)를 적어주세요.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/your-username/project-b",
    image: "",
  },
  {
    title: "프로젝트 이름 C",
    description: "세 번째 프로젝트 설명.",
    tags: ["Python", "FastAPI"],
    liveUrl: "https://example.com",
    image: "",
  },
];
