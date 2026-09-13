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
    "SingleStore를 중심으로 일하는 Database Engineer입니다. 쿼리뿐 아니라 OS, I/O, 메모리와 실행 구조까지 폭넓게 살펴보며 성능 문제의 원인을 찾는 일을 주로 하고 있습니다.",
    "문제를 깊이 분석하고, 그 과정에서 얻은 내용을 다른 사람과 공유하며, 실제 문제 해결까지 이어가는 과정에서 재미를 느낍니다. 때로는 제품 내부 동작까지 분석한 내용이 제품 개선 요청으로 이어지기도 했습니다.",
    "업무 외적으로는 오픈소스에 기여하며 새로운 기술과 구조를 배우고 있습니다.",
  ],
};

export type Skill = { category: string; items: string[] };

export const skills: Skill[] = [
  { category: "Database", items: ["SingleStore"] },
  { category: "Data", items: ["Kafka", "Apache Airflow"] },
  { category: "Platform", items: ["Kubernetes", "Podman", "Linux"] },
  { category: "Development", items: ["Python", "Go"] },
  { category: "Cloud / Observability", items: ["AWS", "Grafana"] },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  // 이력서처럼 소제목 + 항목으로 묶어서 항상 펼쳐진 상태로 표시됩니다.
  details: { group: string; items: string[] }[];
};

export const experiences: Experience[] = [
  {
    company: "에이플랫폼",
    role: "Database Engineer",
    period: "2025.01 – 현재",
    summary:
      "SingleStore 기반 마이그레이션과 POC 수행, 모니터링 플랫폼 구축, 성능 이슈의 내부 원인 분석까지 담당하고 있습니다.",
    details: [
      {
        group: "Database Migration / POC",
        items: [
          "고객 POC에서 Apache Spark 기반 데이터 처리 로직을 SingleStore SQL로 전환하고 함수 로직을 CTE로 재설계하여 결과 정합성 및 SingleStore 기반 처리 가능성 검증",
          "Oracle Function 및 DDL을 SingleStore 호환 구조로 변환하고 기능과 데이터 정합성을 검증하여 이기종 데이터베이스 마이그레이션 호환성 검증",
          "DB에 등록된 작업 스케줄에 따라 데이터를 배치 단위로 이관하는 Airflow 기반 마이그레이션 도구를 만들고, 진행 상태 관리와 실패 재시도 및 중단 지점부터의 재개 기능 구현",
        ],
      },
      {
        group: "Monitoring Platform / Observability",
        items: [
          "Information Schema 기반 성능 지표를 수집하고 저장하는 구조와 플랫폼 아키텍처를 설계하고, Python Collector와 모니터링 플랫폼 Pulse를 개발해 Grafana와 연동",
          "수집 데이터를 기반으로 정기 리포트 자동 생성 기능을 개발하여 지표 수집부터 모니터링과 리포팅까지 통합 Observability 환경 구축",
        ],
      },
      {
        group: "Database Performance / Internals",
        items: [
          "고객사의 executemany INSERT 성능 저하 이슈에서 NOW() 사용으로 Multi-Value Insert 최적화가 적용되지 않는 병목을 규명하고, 쿼리 구조 개선으로 INSERT 성능 약 20배 향상",
          "약 1천만 건 규모의 SingleStore Vector Search를 프로파일링하여 pread 기반 I/O 및 메모리 복사 과정의 병목을 분석, Elasticsearch와의 성능 차이 원인을 규명해 제품 개선 요청으로 연결",
          "Full-Text Search 인덱스 생성 성능 저하 이슈에서 내부 처리 구조의 한계를 규명하고, 분석 결과를 아키텍처 문서로 정리해 제품 개선 요청으로 연결",
        ],
      },
      {
        group: "AI Knowledge Search / Data Integration",
        items: [
          "Notion · Google Chat 등 분산된 사내 데이터를 수집하고 OKF 포맷으로 표준화하는 연동과 변환 파이프라인을 만들어 Knowledge Agent가 활용 가능한 지식 구조 구축",
          "원본 데이터 변경을 지속 반영하는 동기화 구조를 구현하고, 수집에서 변환, 저장, 검색까지 이어지는 사내 Knowledge Search 아키텍처 구축",
        ],
      },
    ],
  },
  {
    company: "무하유",
    role: "Data Engineer Intern",
    period: "2024.09 – 2024.12",
    summary:
      "대규모 문서와 웹 콘텐츠 수집 파이프라인을 개발하고 점검하며 신규 수집처를 확보했습니다.",
    details: [
      {
        group: "Data Collection Pipeline",
        items: [
          "데이터 수집기를 개발하고 점검했으며, 일본 대학·정부기관 신규 수집처 430개를 등록, 중국 미디어 수집처 289개를 정비",
          "중국 레포지토리와 웹 콘텐츠를 수집해 문서 7,500만 건과 웹 콘텐츠 20억 건 규모의 데이터를 확보",
        ],
      },
    ],
  },
];

export type Project = {
  title: string;
  org: string; // 소속과 시기 (예: "에이플랫폼 2025")
  summary: string; // 카드 앞면에 보이는 한 줄
  // 아래는 카드를 클릭하면 열리는 상세 내용입니다.
  problem: string; // 왜 만들었나
  work: string; // 뭘 설계하고 구현했나
  consideration?: { title: string; body: string }[]; // 설계에서 고려한 점
  diagram?: "axel" | "pulse" | "migration"; // 모달 안에 아키텍처 그림을 넣을 때
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "AXEL — 사내 지식 검색 시스템",
    org: "에이플랫폼 2026",
    summary:
      "흩어진 사내 문서 기반 사내 검색 시스템.",
    problem:
      "사내 정보가 Notion · Google Chat 등에 흩어져 있어, 필요한 내용을 찾으려면 그게 어디에 있는지부터 알아야 했습니다.",
    work: "Notion · Google Chat의 원본 변경을 webhook으로 감지해 문서 생성을 트리거하고, Extractor · Router · Merger로 역할을 나눈 에이전트들이 이를 OKF 문서로 만드는 파이프라인을 설계했습니다. 검색용 메타데이터는 llms.txt로 구성했고, Search Agent가 llms.txt를 먼저 읽어 필요한 OKF 문서만 탐색해 답변합니다. 수집부터 에이전트, 웹 UI까지 전 과정을 직접 설계하고 개발했습니다.",
    consideration: [
      {
        title: "청크 유사도 대신 문서 사이의 관계를 따라가게 했습니다",
        body: "사내 문서는 한 건만 봐서는 답이 나오지 않고, 연결된 다른 문서까지 따라가야 하는 경우가 많았습니다. 질문과 표면적으로 비슷한 청크를 뽑는 유사도 검색만으로는 그 연결을 따라갈 수 없다고 판단해, 문서 사이의 관계와 메타데이터를 함께 표현하는 OKF 포맷으로 문서를 구성하고 Search Agent에 탐색 도구를 주어 필요한 문서를 스스로 따라가며 찾게 했습니다.",
      },
      {
        title: "탐색의 진입점으로 llms.txt를 두었습니다",
        body: "llms.txt를 먼저 읽어 후보를 좁힌 뒤 본문을 봅니다. 같은 형식이면 외부 문서도 그대로 붙일 수 있어, SingleStore 공식 문서의 llms.txt까지 참조 대상으로 확장해 제품 관련 질문도 같은 경로로 답합니다.",
      },
      {
        title: "경량 모델에 맞춰 에이전트마다 역할을 하나씩만 맡겼습니다",
        body: "문서 생성 단계는 원본을 정리하고 분류해 문서로 만드는 작업이라 비싼 모델이 필요하지 않다고 판단해, Extractor · Router · Merger를 모두 경량 모델로 구성했습니다. 대신 작은 모델일수록 한 번에 주는 지시가 늘면 지시 준수율이 떨어지기 때문에, 역할을 하나로 제한해 한 번에 판단해야 할 범위를 좁혔습니다.",
      },
    ],
    diagram: "axel",
    tags: ["Python", "LLM Agent", "OpenRouter"],
  },
  {
    title: "Pulse & Collector — SingleStore 모니터링 제품",
    org: "에이플랫폼 2025",
    summary:
      "SingleStore 성능 지표를 주기적으로 수집해 저장하고, 대시보드와 리포트로 확인하는 모니터링 제품.",
    problem:
      "SingleStore의 시스템 뷰 중에는 값을 누적해 두는 것도 있지만, 조회한 그 순간의 상태만 보여주고 잠시 뒤면 사라지는 것도 있습니다. 정작 문제가 터진 뒤에 들어가 보면 그 지표가 이미 없어서, 원인을 분석하기 어려웠습니다.",
    work: "Information Schema의 시스템 뷰에서 성능 지표를 주기적으로 수집하고 저장하는 구조를 설계했습니다. Pulse는 단일 DB를 대상으로 지표 수집, 로컬 저장, CLI 조회, 리포트 생성을 처리합니다. 여러 DB를 함께 봐야 할 때는 Collector가 각 Pulse와 Prometheus Exporter 등의 데이터를 한 DB로 모으고, Grafana에서 통합해 보여줍니다.",
    consideration: [
      {
        title: "뷰별로 수집 주기를 다르게 잡았습니다",
        body: "각 시스템 뷰마다 데이터가 유지되는 시간과 한 번에 조회되는 양이 다릅니다. 사라지기 전에 잡아야 하는 뷰는 주기를 짧게, 조회 비용이 큰 뷰는 상대적으로 길게 잡았습니다. 수집 대상 뷰를 하나씩 확인해 정했습니다.",
      },
      {
        title: "로컬 저장소로 DuckDB를 선택했습니다",
        body: "Pulse를 별도의 DB 서버 없이 설치해서 쓸 수 있게 하고 싶었습니다. 수집 데이터가 계속 쌓이는 구조라 컬럼 기반 압축이 되고, 파일에 저장한 데이터를 SQL로 바로 조회할 수 있는 DuckDB가 맞았습니다. 저장과 CLI 조회가 파일 하나에서 끝납니다.",
      },
      {
        title: "공통 관리 작업은 Master Pulse에 모았습니다",
        body: "여러 Pulse가 지표 수집을 나눠 처리하고, 보관 기간이 지난 데이터 정리나 전체 상태 확인처럼 한 곳에서만 해야 하는 작업은 Master Pulse가 맡습니다. 역할이 고정되어 있어 별도의 관리 구조 없이 단순하게 운영할 수 있습니다.",
      },
      {
        title: "수집 주기를 고려해 프로세스별 부하를 나눴습니다",
        body: "수집 대상마다 주기가 달라서, 단순히 대상 개수만 같게 나누면 특정 프로세스에 작업이 몰릴 수 있습니다. 기동 시 각 대상의 수집 주기를 기준으로 작업을 분배해 Pulse별 수집 부하가 한쪽으로 치우치지 않게 했습니다.",
      },
    ],
    diagram: "pulse",
    tags: ["Python", "DuckDB", "SingleStore"],
  },
  {
    title: "SingleStore 마이그레이션 도구",
    org: "에이플랫폼 2025",
    summary:
      "작업 스케줄에 따라 여러 소스 DB의 데이터를 SingleStore로 이관하고, 실패한 지점부터 다시 이어갈 수 있는 도구.",
    problem:
      "대량 데이터를 한 번에 이관하면 작업 중간에 실패했을 때 진행 상태를 확인하거나 특정 구간부터 다시 시작하기 어려웠습니다. 운영 중인 DB에서는 이관 작업 자체가 부하가 되기 때문에 실행 시간과 작업량도 조절해야 했습니다.",
    work: "DB에 등록된 작업 스케줄을 기반으로 데이터를 여러 배치로 나누고, Airflow가 각 배치의 실행과 진행 상태를 관리합니다. 실제 데이터 전송은 Embulk가 담당하며, 작업이 중단되면 완료된 배치는 건너뛰고 실패한 구간부터 다시 실행합니다.",
    consideration: [
      {
        title: "범위 단위로 데이터를 나눠 이관했습니다",
        body: "타임스탬프나 ID처럼 범위를 나눌 수 있는 컬럼을 기준으로 이관 구간을 만들었습니다. 각 배치가 담당하는 범위와 완료 여부를 기록해, 작업이 중단되어도 이미 옮긴 범위는 다시 건드리지 않습니다.",
      },
      {
        title: "이관 시점을 스케줄로 나눴습니다",
        body: "운영 DB에 이관 부하가 한꺼번에 몰리면 안 되기 때문에, 작업별로 실행 시간을 지정할 수 있게 했습니다. 사용량이 적은 시간대에 몰아서 옮기거나, 여러 시간대로 쪼개 나눠 실행합니다.",
      },
      {
        title: "데이터 전송은 Embulk에 맡겼습니다",
        body: "데이터 이관은 실패하면 유실이나 중복으로 이어지는 영역이라, 직접 짜기보다 검증된 도구를 쓰는 편이 낫다고 봤습니다. 소스별 연결이 플러그인으로 분리되어 있어 새 소스를 추가해도 이관 로직은 그대로입니다. 대신 지원 소스가 Embulk 플러그인 범위로 제한되는 건 감수했습니다.",
      },
    ],
    diagram: "migration",
    tags: ["Airflow", "Embulk", "SingleStore"],
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
//  PR 목록과 스타 수는 scripts/update-contributions.mjs가 GitHub에서 자동 수집해
//  contributions.generated.json에 저장합니다. (GitHub Actions가 매일 갱신)
//  아래 openSourceMeta의 설명/태그/블로그링크만 손으로 큐레이션하세요.
// ============================================================
import contributions from "./contributions.generated.json";

export type OpenSourcePR = {
  title: string;
  url: string;
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
    notes: {
      "https://github.com/traefik/traefik/pull/12293":
        "forward auth 미들웨어에서 로그인 페이지 주소를 따로 지정할 수 있게 했습니다",
    },
  },
  "apache/airflow": {
    displayName: "Apache Airflow",
    blurb: "워크플로우 오케스트레이션 플랫폼 (Apache Software Foundation)",
    tags: ["Python", "Data", "Workflow"],
    notes: {
      "https://github.com/apache/airflow/pull/58023":
        "FAB Provider의 역할 수정 API를 Flask에서 FastAPI로 마이그레이션했습니다",
      "https://github.com/apache/airflow/pull/58009":
        "FAB Provider의 역할 조회 API를 FastAPI로 마이그레이션했습니다",
      "https://github.com/apache/airflow/pull/57780":
        "FAB Provider의 역할 삭제 API를 FastAPI로 마이그레이션했습니다",
    },
  },
  "podman-container-tools/podman": {
    displayName: "Podman",
    blurb: "Red Hat의 데몬리스 OCI 컨테이너 엔진",
    tags: ["Go", "Containers", "CLI"],
    notes: {
      "https://github.com/podman-container-tools/podman/pull/28673":
        "삭제 전에 어떤 볼륨이 정리될지 미리 보여주는 --dry-run 옵션을 추가했습니다",
      "https://github.com/podman-container-tools/podman/pull/28391":
        "없는 네트워크를 지울 때 오류 대신 성공으로 끝내는 --ignore 옵션을 추가했습니다",
      "https://github.com/podman-container-tools/podman/pull/28265":
        "서버에 연결되지 않아도 podman version이 클라이언트 정보는 출력하게 했습니다",
      "https://github.com/podman-container-tools/podman/pull/27608":
        "podman info에 기본 네트워크 이름을 노출했습니다",
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
    blurb: "eBPF 기반 쿠버네티스 네트워킹과 보안 (CNCF Graduated)",
    tags: ["Go", "eBPF", "Kubernetes"],
    notes: {
      "https://github.com/cilium/cilium/pull/48411":
        "CiliumPodIPPool의 저장 버전 마이그레이션을 가능하게 했습니다",
      "https://github.com/cilium/cilium/pull/46880":
        "풀에서 미리 떼어 둘 IP 구간을 지정하는 ReservedRange를 추가했습니다",
      "https://github.com/cilium/cilium/pull/44383":
        "Multi-Pool IPAM을 위한 CiliumPodIPPool v2 API를 새로 추가했습니다",
      "https://github.com/cilium/cilium/pull/41949":
        "Hubble 흐름 관측에 VRRP와 IGMP 프로토콜 파싱을 추가했습니다",
    },
    relatedPosts: [
      { label: "[Network] VRRP Protocol", url: "https://codingjang.tistory.com/88" },
    ],
  },
  "floci-io/floci": {
    displayName: "floci",
    blurb: "가볍고 무료인 AWS 로컬 에뮬레이터",
    tags: ["AWS", "Cloud", "Java"],
    notes: {
      "https://github.com/floci-io/floci/pull/1042":
        "KMS 키 수동 회전의 횟수 제한 처리를 추가했습니다",
      "https://github.com/floci-io/floci/pull/990":
        "필요할 때 직접 키를 회전시키는 RotateKeyOnDemand 지원을 추가했습니다",
    },
  },
  "openbao/openbao": {
    displayName: "OpenBao",
    blurb: "HashiCorp Vault 기반 오픈소스 시크릿 관리 (Linux Foundation)",
    tags: ["Go", "Secrets", "Security"],
    notes: {
      "https://github.com/openbao/openbao/pull/2153":
        "agent, proxy, migrate의 설정 파일 경로를 환경 변수로 지정하는 방법을 추가했습니다",
      "https://github.com/openbao/openbao/pull/1959":
        "Valkey 시크릿 엔진이 creation_statements를 문자열 배열로 제대로 읽지 못하던 문제를 고쳤습니다",
      "https://github.com/openbao/openbao/pull/1923":
        "Valkey 연결 설정을 connection_url 한 줄로 받게 했습니다",
      "https://github.com/openbao/openbao/pull/1868":
        "외부 검증 라이브러리 govalidator 의존성을 제거했습니다",
      "https://github.com/openbao/openbao/pull/1834":
        "리스너별로 메트릭만 노출하거나 메트릭을 막을 수 있는 옵션을 추가했습니다",
    },
  },
};

// 생성된 JSON + 큐레이션 메타를 합칩니다.
// 머지된 PR만 노출하고, 머지 건이 없는 레포는 제외합니다.
export const openSource: OpenSource[] = contributions.projects
  .map((p) => {
  const meta = openSourceMeta[p.repo] ?? {};
  return {
    project: meta.displayName ?? p.repo.split("/")[1],
    projectUrl: p.repoUrl,
    stars: p.stars,
    blurb: meta.blurb ?? p.description,
    tags: meta.tags ?? (p.language ? [p.language] : []),
    prs: p.prs
      .filter((pr) => pr.merged)
      .map((pr) => ({
        title: pr.title,
        url: pr.url,
        note: meta.notes?.[pr.url],
      })),
    relatedPosts: meta.relatedPosts,
  };
  })
  .filter((p) => p.prs.length > 0);
