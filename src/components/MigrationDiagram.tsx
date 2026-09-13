// SingleStore 마이그레이션 도구 아키텍처 — 인라인 SVG (색은 테마 변수를 따라갑니다)
// 핵심은 제어와 데이터 전송이 분리돼 있다는 것: Airflow 는 무엇을 언제 옮길지만 정하고,
// 실제 바이트는 Embulk 가 옮깁니다. 진행 상태가 남기 때문에 중단된 지점부터 이어집니다.
export function MigrationDiagram() {
  return (
    <figure className="mt-5">
      <figcaption className="text-sm font-medium">아키텍처</figcaption>
      <div className="mt-2 overflow-x-auto rounded-lg border border-border p-3">
        <svg
          viewBox="0 0 620 282"
          role="img"
          aria-label="SingleStore 마이그레이션 도구 아키텍처. 제어 계층: DB에 등록된 작업 스케줄에서 대상과 범위, 실행 시간을 읽어 Airflow 가 범위 기준으로 배치를 나누고 실행 시점을 제어하며, 배치별 완료 여부를 진행 상태에 기록하고 재시작할 때 다시 조회합니다. 데이터 계층: 배치마다 Embulk 를 실행해 소스 DB 의 데이터를 SingleStore 로 옮깁니다. 소스 DB 는 Embulk 플러그인이 지원하는 범위입니다."
          className="w-full min-w-[560px]"
          fill="none"
        >
          <defs>
            <marker
              id="mig-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="var(--muted)" />
            </marker>
          </defs>

          <g stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4">
            <path d="M0,162 L620,162" />
          </g>

          <g stroke="var(--border)" strokeWidth="1" fill="var(--card-hover)">
            <rect x="210" y="24" width="200" height="44" rx="8" />
            <rect x="180" y="88" width="260" height="52" rx="8" />
            <rect x="478" y="92" width="130" height="44" rx="8" />
            <rect x="30" y="196" width="150" height="44" rx="8" />
            <rect x="235" y="196" width="150" height="44" rx="8" />
            <rect x="440" y="196" width="150" height="44" rx="8" />
          </g>

          <g
            stroke="var(--muted)"
            strokeWidth="1.2"
            markerEnd="url(#mig-arrow)"
          >
            <path d="M310,68 L310,86" />
            <path d="M440,106 L476,106" />
            <path d="M310,140 L310,194" />
            <path d="M180,218 L233,218" />
            <path d="M385,218 L438,218" />
          </g>

          <g
            stroke="var(--muted)"
            strokeWidth="1"
            strokeDasharray="3 3"
            markerEnd="url(#mig-arrow)"
          >
            <path d="M476,124 L442,124" />
          </g>

          <g
            fill="var(--foreground)"
            fontSize="13"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="310" y="44">작업 스케줄</text>
            <text x="310" y="110">Airflow</text>
            <text x="543" y="112">진행 상태</text>
            <text x="105" y="218">소스 DB</text>
            <text x="310" y="218">Embulk</text>
            <text x="515" y="218">SingleStore</text>
          </g>

          <g
            fill="var(--muted)"
            fontSize="10.5"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="310" y="60">대상 · 범위 · 실행 시간</text>
            <text x="310" y="127">범위 기준 배치 분할 · 실행 시점 제어</text>
            <text x="543" y="127">배치별 완료 여부</text>
            <text x="458" y="100">기록</text>
            <text x="458" y="140">조회</text>
            <text x="105" y="258">Embulk 플러그인 지원 범위</text>
          </g>

          <g
            fill="var(--muted)"
            fontSize="10.5"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="4" y="14">제어 — 무엇을 언제 얼마나 옮길지</text>
            <text x="4" y="180">데이터 — 실제 전송</text>
            <text x="318" y="170">배치마다 실행</text>
          </g>
        </svg>
      </div>
    </figure>
  );
}
