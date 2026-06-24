// ============================================================
//  이 파일만 고치면 포트폴리오 내용이 전부 바뀝니다.
//  (이름, 소개, 스킬, 경력, 오픈소스, 프로젝트, 학력, 자격증, 연락처)
// ============================================================

export const profile = {
  name: "장경훈",
  role: "Infrastructure Engineer",
  tagline:
    "컨테이너·쿠버네티스·클라우드 인프라를 다루며, 오픈소스로 기여하는 인프라 엔지니어입니다.",
  location: "Seoul, Korea",
  email: "owndill19@gmail.com",
  // 비워두면 해당 버튼이 표시되지 않습니다.
  github: "https://github.com/kyounghoonJang",
  linkedin: "",
  resumeUrl: "", // PDF 이력서 링크 (예: "/resume.pdf")
  about: [
    "컨테이너, 쿠버네티스, 클라우드 네이티브 인프라에 관심이 많은 인프라 엔지니어입니다. Podman, Cilium, OpenBao 등 핵심 오픈소스 프로젝트에 직접 기여하며 대규모 코드베이스를 읽고 협업하는 경험을 쌓아왔습니다.",
    "여기에 본인을 더 구체적으로 소개하세요 — 어떤 인프라 문제를 즐겨 풀고, 어떤 스택(쿠버네티스/IaC/관측성 등)에 강하며, 앞으로 어떤 인프라 엔지니어가 되고 싶은지로 마무리하면 인상이 좋습니다.",
  ],
};

export type Skill = { category: string; items: string[] };

// ⚠️ 실제로 다룰 수 있는 것만 남기고 자유롭게 수정하세요.
export const skills: Skill[] = [
  { category: "Languages", items: ["Go", "Python", "Bash", "TypeScript"] },
  {
    category: "Containers / Orchestration",
    items: ["Kubernetes", "Docker", "Podman", "Helm"],
  },
  {
    category: "Cloud / IaC",
    items: ["AWS", "Terraform", "Cilium", "Linux"],
  },
  {
    category: "Observability / CI·CD",
    items: ["Prometheus", "Grafana", "GitHub Actions", "ArgoCD"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  // 핵심 성과 — 수치를 강조하면 좋습니다. value가 크게 표시됩니다.
  metrics?: { value: string; label: string }[];
  // "상세 내용 보기"를 누르면 펼쳐지는 내용
  details: string[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    company: "회사 / 팀 이름",
    role: "Frontend Engineer",
    period: "2023.01 – 현재",
    summary: "이 조직에서 맡았던 역할과 책임을 한 줄로 요약합니다.",
    metrics: [
      { value: "40%", label: "페이지 로드 단축" },
      { value: "18만→20만", label: "MAU 증가" },
    ],
    details: [
      "구체적인 성과를 숫자와 함께 적으면 좋습니다.",
      "어떤 기술/방법으로 어떤 문제를 해결했는지 적습니다.",
      "팀에서 주도한 일이 있다면 강조하세요.",
    ],
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "이전 회사 / 프로젝트",
    role: "Frontend Developer",
    period: "2021.06 – 2022.12",
    summary: "또 다른 경력을 추가할 수 있습니다.",
    details: ["주요 업무 1", "주요 업무 2"],
    tags: ["React", "JavaScript"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  // public/ 폴더 기준 경로 (예: "/projects/app.gif" 또는 ".png"). 없으면 placeholder.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "프로젝트 이름 A",
    description:
      "이 프로젝트가 무엇이고, 어떤 문제를 풀었으며, 내가 어떤 부분을 담당했는지 2~3문장으로 설명합니다.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/kyounghoonJang/project-a",
    image: "",
  },
  {
    title: "프로젝트 이름 B",
    description:
      "두 번째 프로젝트 설명. 사용한 기술과 결과(사용자 수, 성능 개선 등)를 적어주세요.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/kyounghoonJang/project-b",
    image: "",
  },
];

// 사이드 프로젝트 (개인/토이 프로젝트)
export const sideProjects: Project[] = [
  {
    title: "사이드 프로젝트",
    description: "개인적으로 만든 토이 프로젝트나 실험적인 작업물을 적습니다.",
    tags: ["React", "Vite"],
    repoUrl: "https://github.com/kyounghoonJang/side-project",
    image: "",
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "OO대학교",
    degree: "전공 / 학위",
    period: "2017.03 – 2021.02",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string; // 취득 시기 (예: "2024.08")
  url?: string; // 자격증 검증 링크 (Credly 등). 없으면 링크 미표시.
};

// ⚠️ 실제 보유한 자격증으로 교체하세요. (아래는 인프라 직군에서 흔한 예시)
export const certifications: Certification[] = [
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "CNCF / Linux Foundation",
    date: "2025.00",
    url: "",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024.00",
    url: "",
  },
];

// 오픈소스 기여 — 프로젝트별로 묶어서 표시합니다.
export type OpenSourcePR = { title: string; url: string; merged: boolean };
export type OpenSource = {
  project: string;
  projectUrl: string;
  // 프로젝트가 뭔지 한 줄 설명
  blurb: string;
  tags: string[];
  prs: OpenSourcePR[];
};

export const openSource: OpenSource[] = [
  {
    project: "Podman",
    projectUrl: "https://github.com/podman-container-tools/podman",
    blurb: "Red Hat의 데몬리스 OCI 컨테이너 엔진 (⭐32k)",
    tags: ["Go", "Containers", "CLI"],
    prs: [
      {
        title: "volume prune: add dry-run support",
        url: "https://github.com/podman-container-tools/podman/pull/28673",
        merged: true,
      },
      {
        title: "add --ignore flag to network rm",
        url: "https://github.com/podman-container-tools/podman/pull/28391",
        merged: true,
      },
      {
        title:
          "print client info from `podman version` when the server is unavailable",
        url: "https://github.com/podman-container-tools/podman/pull/28265",
        merged: true,
      },
    ],
  },
  {
    project: "OpenBao",
    projectUrl: "https://github.com/openbao/openbao",
    blurb: "HashiCorp Vault 기반 오픈소스 시크릿 관리 (Linux Foundation)",
    tags: ["Go", "Secrets", "Security"],
    prs: [
      {
        title: "core: add metrics_only / disallow_metrics listener options",
        url: "https://github.com/openbao/openbao/pull/1834",
        merged: true,
      },
      {
        title: "valkey: support connection_url for configuration",
        url: "https://github.com/openbao/openbao/pull/1923",
        merged: true,
      },
      {
        title: "valkey: correctly parse creation_statements as a string array",
        url: "https://github.com/openbao/openbao/pull/1959",
        merged: true,
      },
      {
        title: "add BAO_{AGENT,PROXY,MIGRATE}_CONFIG_PATH env variables",
        url: "https://github.com/openbao/openbao/pull/2153",
        merged: true,
      },
      {
        title: "remove dependency on github.com/asaskevich/govalidator",
        url: "https://github.com/openbao/openbao/pull/1868",
        merged: true,
      },
    ],
  },
  {
    project: "Cilium",
    projectUrl: "https://github.com/cilium/cilium",
    blurb: "eBPF 기반 쿠버네티스 네트워킹·보안 (CNCF Graduated)",
    tags: ["Go", "eBPF", "Kubernetes"],
    prs: [
      {
        title: "api: add CiliumPodIPPool v2 API with pool fields",
        url: "https://github.com/cilium/cilium/pull/44383",
        merged: true,
      },
    ],
  },
  {
    project: "floci",
    projectUrl: "https://github.com/floci-io/floci",
    blurb: "가볍고 무료인 AWS 로컬 에뮬레이터 (LocalStack 대안)",
    tags: ["Go", "AWS", "Cloud"],
    prs: [
      {
        title: "kms: add RotateKeyOnDemand support",
        url: "https://github.com/floci-io/floci/pull/990",
        merged: true,
      },
      {
        title: "kms: handle RotateKeyOnDemand rotation limit",
        url: "https://github.com/floci-io/floci/pull/1042",
        merged: true,
      },
      {
        title: "ec2: add NAT gateway create and describe support",
        url: "https://github.com/floci-io/floci/pull/1227",
        merged: false,
      },
    ],
  },
];
