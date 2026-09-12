// ============================================================
//  이 파일만 고치면 포트폴리오 내용이 전부 바뀝니다.
//  (이름, 소개, 스킬, 경력, 오픈소스, 학력, 자격증, 연락처)
// ============================================================

export const profile = {
  name: "장경훈",
  role: "Database Engineer",
  // 화면에는 표시되지 않고, 검색결과/SNS 공유 시 보이는 설명으로만 쓰입니다.
  tagline:
    "데이터베이스의 내부 동작과 성능을 파고들고, 오픈소스에 직접 코드로 기여하는 엔지니어입니다.",
  location: "Seoul, Korea",
  email: "owndill19@gmail.com",
  // 비워두면 해당 버튼이 표시되지 않습니다.
  github: "https://github.com/kyounghoonJang",
  linkedin: "",
  blog: "https://codingjang.tistory.com/", // 비워두면 블로그 섹션이 숨겨집니다.
  resumeUrl: "", // PDF 이력서 링크 (예: "/resume.pdf")
  about: [
    "데이터베이스의 내부 동작과 성능을 분석하고, 고객 환경에서 발생하는 기술적 문제를 해결해 온 Database Engineer 입니다. SingleStore 를 중심으로 다양한 워크로드의 POC 와 성능 검증을 수행했으며, 성능 이슈가 발생하면 쿼리와 DB 지표를 넘어 OS · I/O · 메모리 및 실행 구조까지 분석 범위를 확장해 원인을 추적합니다.",
    "업무 외에도 Cilium, Apache Airflow, Podman, OpenBao 등 대규모 오픈소스 프로젝트에 기여하며, 처음 보는 코드베이스를 분석하고 실제 코드 변경으로 문제를 해결하는 경험을 이어가고 있습니다.",
  ],
};

export type Skill = { category: string; items: string[] };

export const skills: Skill[] = [
  { category: "Database", items: ["SingleStore", "SQL", "Oracle"] },
  { category: "Data", items: ["Kafka", "Apache Airflow", "Spark"] },
  { category: "Platform", items: ["Kubernetes", "Podman", "Linux"] },
  { category: "Development", items: ["Python", "Go"] },
  { category: "Cloud / Observability", items: ["AWS", "Grafana"] },
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
    company: "에이플랫폼",
    role: "Database Engineer",
    period: "2025.01 – 현재",
    summary:
      "SingleStore 기반 마이그레이션·POC 수행, 모니터링 플랫폼 구축, 성능 이슈의 내부 원인 분석까지 담당하고 있습니다.",
    metrics: [
      { value: "20배", label: "INSERT 성능 향상" },
      { value: "1천만 건", label: "Vector Search 성능 프로파일링" },
    ],
    details: [
      "[Migration/POC] 고객 POC 에서 Apache Spark 기반 데이터 처리 로직을 SingleStore SQL 로 전환하고 함수 로직을 CTE 로 재설계하여 결과 정합성 및 SingleStore 기반 처리 가능성 검증",
      "[Migration/POC] Oracle Function 및 DDL 을 SingleStore 호환 구조로 변환하고 기능·데이터 정합성을 검증하여 이기종 데이터베이스 마이그레이션 호환성 검증",
      "[Migration/POC] DB에 등록된 작업 스케줄에 따라 데이터를 배치 단위로 이관하는 Airflow 기반 마이그레이션 도구를 설계·개발하고, 진행 상태 관리와 실패 재시도 및 중단 지점부터의 재개 기능 구현",
      "[Observability] Information Schema 기반 성능 지표의 수집·저장 구조와 플랫폼 아키텍처를 설계하고, Python Collector 와 모니터링 플랫폼 Pulse 를 개발해 Grafana 와 연동",
      "[Observability] 수집 데이터를 기반으로 정기 리포트 자동 생성 기능을 개발하여 지표 수집부터 모니터링·리포팅까지 통합 Observability 환경 구축",
      "[Performance] 고객사의 executemany INSERT 성능 저하 이슈에서 NOW() 사용으로 Multi-Value Insert 최적화가 적용되지 않는 병목을 규명하고, 쿼리 구조 개선으로 INSERT 성능 약 20배 향상",
      "[Performance] 약 1천만 건 규모의 SingleStore Vector Search 를 프로파일링하여 pread 기반 I/O 및 메모리 복사 과정의 병목을 분석, Elasticsearch 와의 성능 차이 원인을 규명해 제품 개선 요청으로 연결",
      "[Performance] Full-Text Search 인덱스 생성 성능 저하 이슈에서 내부 처리 구조의 한계를 규명하고, 분석 결과를 아키텍처 문서로 정리해 제품 개선 요청으로 연결",
      "[AI/Data] Notion · Google Chat 등 분산된 사내 데이터를 수집하고 OKF 포맷으로 표준화하는 연동·변환 파이프라인을 설계·개발하여 Knowledge Agent 가 활용 가능한 지식 구조 구축",
      "[AI/Data] 원본 데이터 변경을 지속 반영하는 동기화 구조를 구현하고, 수집–변환–저장–검색으로 이어지는 사내 Knowledge Search 아키텍처 구축",
    ],
    tags: ["SingleStore", "Python", "Airflow", "Kafka", "Grafana", "Kubernetes"],
  },
  {
    company: "무하유",
    role: "Data Engineer Intern",
    period: "2024.09 – 2024.12",
    summary:
      "대규모 문서·웹 콘텐츠 수집 파이프라인을 개발·점검하고 신규 수집처를 확보했습니다.",
    metrics: [
      { value: "430개", label: "신규 수집처 등록" },
      { value: "20억 건", label: "웹 콘텐츠 수집" },
    ],
    details: [
      "데이터 수집기를 개발·점검하고 일본 대학·정부기관 신규 수집처 430개를 등록, 중국 미디어 수집처 289개를 정비",
      "중국 레포지토리·웹 콘텐츠를 수집해 문서 7,500만 건과 웹 콘텐츠 20억 건 규모의 데이터를 확보",
    ],
    tags: ["Python", "Data Pipeline", "Crawling"],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "세종대학교",
    degree: "데이터사이언스",
    period: "2019.03 – 2025.02",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string; // 취득 시기 (예: "2024.08")
  url?: string; // 자격증 검증 링크 (Credly 등). 없으면 링크 미표시.
};

export const certifications: Certification[] = [
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2026.09",
    url: "",
  },
  {
    name: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    date: "2024.11",
    url: "",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024.03",
    url: "",
  },
  {
    name: "SQL 개발자 (SQLD)",
    issuer: "한국데이터산업진흥원",
    date: "2022.12",
    url: "",
  },
  {
    name: "데이터분석 준전문가 (ADsP)",
    issuer: "한국데이터산업진흥원",
    date: "2022.09",
    url: "",
  },
  {
    name: "네트워크관리사 2급",
    issuer: "한국정보통신자격협회 (ICQA)",
    date: "2020.05",
    url: "",
  },
  {
    name: "리눅스마스터 2급",
    issuer: "한국정보통신진흥협회 (KAIT)",
    date: "2019.04",
    url: "",
  },
];

// ============================================================
//  오픈소스 기여
//  PR 목록·스타 수는 scripts/update-contributions.mjs 가 GitHub에서 자동 수집해
//  contributions.generated.json 에 저장합니다. (GitHub Actions가 매일 갱신)
//  아래 openSourceMeta 의 설명/태그/블로그링크만 손으로 큐레이션하세요.
// ============================================================
import contributions from "./contributions.generated.json";

export type OpenSourcePR = {
  title: string;
  url: string;
  merged: boolean;
  note?: string; // 큐레이션된 한 줄 설명 (선택)
};
export type OpenSource = {
  project: string;
  projectUrl: string;
  stars: number;
  blurb: string;
  tags: string[];
  prs: OpenSourcePR[];
  relatedPosts?: { label: string; url: string }[];
};

// repo full name → 큐레이션. 없는 레포는 GitHub 설명/언어로 자동 표시됩니다.
type OpenSourceMeta = {
  displayName?: string;
  blurb?: string;
  tags?: string[];
  relatedPosts?: { label: string; url: string }[];
  notes?: Record<string, string>; // PR url → 한 줄 설명
};

const openSourceMeta: Record<string, OpenSourceMeta> = {
  "traefik/traefik": {
    displayName: "Traefik",
    blurb: "클라우드 네이티브 리버스 프록시 / 로드밸런서",
    tags: ["Go", "Networking", "Proxy"],
  },
  "apache/airflow": {
    displayName: "Apache Airflow",
    blurb: "워크플로우 오케스트레이션 플랫폼 (Apache Software Foundation)",
    tags: ["Python", "Data", "Workflow"],
    notes: {
      "https://github.com/apache/airflow/pull/58023":
        "FAB Provider 의 Role PATCH API 를 Flask/Connexion 에서 FastAPI 로 마이그레이션 (서비스 로직·응답 테스트 포함).",
      "https://github.com/apache/airflow/pull/58009":
        "FAB Provider 의 Role GET API 를 FastAPI 로 마이그레이션.",
      "https://github.com/apache/airflow/pull/57780":
        "FAB Provider 의 Role DELETE API 를 FastAPI 로 마이그레이션.",
    },
  },
  "podman-container-tools/podman": {
    displayName: "Podman",
    blurb: "Red Hat의 데몬리스 OCI 컨테이너 엔진",
    tags: ["Go", "Containers", "CLI"],
    notes: {
      "https://github.com/podman-container-tools/podman/pull/28673":
        "삭제 전 어떤 볼륨이 정리될지 미리 보여주는 --dry-run 옵션 추가 (local·remote 모두 지원).",
      "https://github.com/podman-container-tools/podman/pull/28391":
        "존재하지 않는 네트워크 삭제 시 exit 1 대신 success 반환 — Docker CLI와의 동작 일관성 확보 (#28363).",
    },
    relatedPosts: [
      {
        label: "Deep Dive 0편: Podman 아키텍처",
        url: "https://codingjang.tistory.com/89",
      },
      {
        label: "Deep Dive 1편: podman run 은 어떻게 동작할까?",
        url: "https://codingjang.tistory.com/90",
      },
    ],
  },
  "cilium/cilium": {
    displayName: "Cilium",
    blurb: "eBPF 기반 쿠버네티스 네트워킹·보안 (CNCF Graduated)",
    tags: ["Go", "eBPF", "Kubernetes"],
    notes: {
      "https://github.com/cilium/cilium/pull/44383":
        "Multi-Pool IPAM을 위한 CiliumPodIPPool v2 API 신규 추가 — CRD 스키마·검증·codegen 포함 (+1,000여 줄, 16개 파일).",
      "https://github.com/cilium/cilium/pull/41949":
        "Hubble 흐름 관측에 VRRP·IGMP 프로토콜 파싱 지원 추가.",
    },
    relatedPosts: [
      { label: "[Network] VRRP Protocol", url: "https://codingjang.tistory.com/88" },
    ],
  },
  "floci-io/floci": {
    displayName: "floci",
    blurb: "가볍고 무료인 AWS 로컬 에뮬레이터 (LocalStack 대안)",
    tags: ["AWS", "Cloud", "Java"],
  },
  "openbao/openbao": {
    displayName: "OpenBao",
    blurb: "HashiCorp Vault 기반 오픈소스 시크릿 관리 (Linux Foundation)",
    tags: ["Go", "Secrets", "Security"],
    notes: {
      "https://github.com/openbao/openbao/pull/1834":
        "리스너별 메트릭 노출 제어 옵션 추가 — 모니터링 전용 포트를 분리해 다른 API 노출 없이 메트릭만 제공 (보안 강화, #1704).",
    },
  },
};

// 생성된 JSON + 큐레이션 메타를 합칩니다.
export const openSource: OpenSource[] = contributions.projects.map((p) => {
  const meta = openSourceMeta[p.repo] ?? {};
  return {
    project: meta.displayName ?? p.repo.split("/")[1],
    projectUrl: p.repoUrl,
    stars: p.stars,
    blurb: meta.blurb ?? p.description,
    tags: meta.tags ?? (p.language ? [p.language] : []),
    prs: p.prs.map((pr) => ({
      title: pr.title,
      url: pr.url,
      merged: pr.merged,
      note: meta.notes?.[pr.url],
    })),
    relatedPosts: meta.relatedPosts,
  };
});
