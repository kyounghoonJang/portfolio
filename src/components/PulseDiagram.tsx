// Pulse & Collector 아키텍처 — 인라인 SVG (색은 테마 변수를 따라갑니다)
// 핵심은 Pulse 하나로 수집부터 조회까지 끝나고, Collector 는 여러 대를 모아 볼 때만 얹는다는 것.
export function PulseDiagram() {
  return (
    <figure className="mt-5">
      <figcaption className="text-sm font-medium">아키텍처</figcaption>
      <div className="mt-2 overflow-x-auto rounded-lg border border-border p-3">
        <svg
          viewBox="0 0 620 420"
          role="img"
          aria-label="Pulse와 Collector 아키텍처. 기본 구성: Pulse 가 Source SingleStore 의 시스템 뷰를 주기마다 조회해 DuckDB 로컬 저장소에 압축해 쌓고, CLI 질의와 리포트를 여기서 바로 제공합니다. 확장 구성: Collector 가 작업 목록에 따라 Pulse 와 Prometheus Exporter 같은 다른 수집원에 요청해 데이터를 모으고, Target SingleStore 에 적재하고, Grafana 대시보드에서 함께 볼 수 있게 합니다."
          className="w-full min-w-[560px]"
          fill="none"
        >
          <defs>
            <marker
              id="pulse-arrow"
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
            <path d="M0,272 L620,272" />
          </g>

          <g stroke="var(--border)" strokeWidth="1" fill="var(--card-hover)">
            <rect x="235" y="26" width="150" height="36" rx="8" />
            <rect x="200" y="86" width="220" height="48" rx="8" />
            <rect x="210" y="158" width="200" height="44" rx="8" />
            <rect x="160" y="226" width="140" height="34" rx="6" />
            <rect x="320" y="226" width="140" height="34" rx="6" />
            <rect x="20" y="302" width="150" height="32" rx="6" />
            <rect x="20" y="344" width="150" height="32" rx="6" />
            <rect x="223" y="317" width="142" height="44" rx="8" />
            <rect x="408" y="317" width="180" height="44" rx="8" />
            <rect x="408" y="379" width="180" height="32" rx="6" />
          </g>

          <g
            stroke="var(--muted)"
            strokeWidth="1.2"
            markerEnd="url(#pulse-arrow)"
          >
            <path d="M310,62 L310,84" />
            <path d="M310,134 L310,156" />
            <path d="M230,202 L230,224" />
            <path d="M390,202 L390,224" />
            <path d="M170,318 L221,332" />
            <path d="M170,360 L221,346" />
            <path d="M365,339 L406,339" />
            <path d="M498,361 L498,377" />
          </g>

          <g
            fill="var(--foreground)"
            fontSize="13"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="310" y="49">Source SingleStore</text>
            <text x="310" y="107">Pulse</text>
            <text x="310" y="179">로컬 저장소</text>
            <text x="230" y="247">CLI 조회</text>
            <text x="390" y="247">리포트</text>
            <text x="95" y="322">Pulse</text>
            <text x="95" y="364" fontSize="11.5">Prometheus Exporter</text>
            <text x="294" y="336">Collector</text>
            <text x="498" y="344">Target SingleStore</text>
            <text x="498" y="399" fontSize="12">Grafana 대시보드</text>
          </g>

          <g
            fill="var(--muted)"
            fontSize="10.5"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="310" y="123">수집 프로세스 · 보관 정리 · 상태 감시</text>
            <text x="310" y="194">DuckDB — 압축 저장</text>
            <text x="294" y="351">요청해 모아 적재</text>
          </g>

          <g
            fill="var(--muted)"
            fontSize="10.5"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="4" y="14">기본 — Pulse 하나로 수집부터 조회까지</text>
            <text x="4" y="290">여러 대와 다른 수집원을 함께 볼 때 — Collector 추가</text>
            <text x="318" y="78">시스템 뷰를 주기마다 조회</text>
          </g>
        </svg>
      </div>
    </figure>
  );
}
