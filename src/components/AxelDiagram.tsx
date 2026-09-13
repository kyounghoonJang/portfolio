// AXEL 아키텍처 — 인라인 SVG (색은 테마 변수를 따라가므로 다크모드에서 함께 바뀝니다)
// 핵심은 시점이 둘로 나뉜다는 것: ① 문서 생성은 webhook 이벤트 때 미리, ② 질의는 그 결과물만 읽습니다.
export function AxelDiagram() {
  return (
    <figure className="mt-5">
      <figcaption className="text-sm font-medium">아키텍처</figcaption>
      <div className="mt-2 overflow-x-auto rounded-lg border border-border p-3">
        <svg
          viewBox="0 0 620 466"
          role="img"
          aria-label="AXEL 아키텍처. 문서 생성 시점: Notion과 Google Chat의 변경을 webhook으로 감지해 수집하고, Extractor가 원본에서 문서 내용을 뽑으면 Router가 신규·수정·병합 여부를 판단하고 Merger가 기존 문서에 반영해, OKF 문서와 검색용 llms.txt를 만들어 둡니다. 질의 시점: 웹 UI로 들어온 질문을 Search Agent가 받아 llms.txt를 먼저 읽고 필요한 OKF 문서만 탐색해 답변합니다. 이때 OpenRouter의 모델과 SingleStore 공식 문서 llms.txt를 함께 사용합니다."
          className="w-full min-w-[560px]"
          fill="none"
        >
          <defs>
            <marker
              id="axel-arrow"
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

          {/* 두 시점을 가르는 구분선 */}
          <g stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4">
            <path d="M0,186 L620,186" />
            <path d="M0,264 L620,264" />
          </g>

          {/* 박스 */}
          <g stroke="var(--border)" strokeWidth="1" fill="var(--card-hover)">
            <rect x="170" y="22" width="130" height="30" rx="8" />
            <rect x="320" y="22" width="130" height="30" rx="8" />
            <rect x="170" y="70" width="280" height="30" rx="8" />
            <rect x="135" y="118" width="110" height="56" rx="6" />
            <rect x="255" y="118" width="110" height="56" rx="6" />
            <rect x="375" y="118" width="110" height="56" rx="6" />
            <rect x="140" y="196" width="150" height="56" rx="8" />
            <rect x="310" y="196" width="170" height="56" rx="8" />
            <rect x="190" y="306" width="240" height="50" rx="8" />
            <rect x="190" y="406" width="240" height="40" rx="8" />
            <rect x="8" y="312" width="150" height="38" rx="6" />
            <rect x="446" y="312" width="150" height="38" rx="6" />
          </g>

          {/* 흐름 화살표 */}
          <g
            stroke="var(--muted)"
            strokeWidth="1.2"
            markerEnd="url(#axel-arrow)"
          >
            <path d="M310,52 L310,68" />
            <path d="M310,100 L310,116" />
            <path d="M245,146 L253,146" />
            <path d="M365,146 L373,146" />
            <path d="M310,174 L310,194" />
            <path d="M310,306 L310,256" />
            <path d="M270,406 L270,358" />
            <path d="M350,358 L350,404" />
          </g>

          {/* 참조(읽기 전용) 연결 */}
          <g stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 3">
            <path d="M158,331 L188,331" />
            <path d="M430,331 L446,331" />
          </g>

          {/* 박스 안 이름 */}
          <g
            fill="var(--foreground)"
            fontSize="13"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="235" y="42">Notion</text>
            <text x="385" y="42">Google Chat</text>
            <text x="310" y="90">수집 파이프라인</text>
            <text x="190" y="138">Extractor</text>
            <text x="310" y="138">Router</text>
            <text x="430" y="138">Merger</text>
            <text x="215" y="220">OKF 문서</text>
            <text x="395" y="220">llms.txt</text>
            <text x="310" y="328">Search Agent</text>
            <text x="310" y="431">웹 UI</text>
          </g>

          {/* 보조 설명 */}
          <g
            fill="var(--muted)"
            fontSize="10.5"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="190" y="154">원본에서</text>
            <text x="190" y="167">문서 내용 추출</text>
            <text x="310" y="154">신규 · 수정 · 병합</text>
            <text x="310" y="167">여부 판단</text>
            <text x="430" y="154">판단에 따라</text>
            <text x="430" y="167">기존 문서와 병합</text>
            <text x="215" y="238">표준화된 사내 문서</text>
            <text x="395" y="238">검색용 메타데이터</text>
            <text x="83" y="328">SingleStore docs</text>
            <text x="83" y="342">llms.txt 참조</text>
            <text x="521" y="328">OpenRouter</text>
            <text x="521" y="342">(LLM)</text>
          </g>
          <g
            fill="var(--muted)"
            fontSize="10.5"
            fontFamily="var(--font-sans), sans-serif"
          >
            <text x="4" y="14">① 문서 생성 — webhook 이벤트 발생 시</text>
            <text x="4" y="282">② 질의 — 사용자 질문 시</text>
            <text x="318" y="64">webhook 으로 원본 변경 감지</text>
            <text x="318" y="284">llms.txt 를 먼저 읽고 → 필요한 OKF 문서만 탐색</text>
            <text x="262" y="386" textAnchor="end">
              질문
            </text>
            <text x="358" y="386">답변</text>
          </g>
        </svg>
      </div>
    </figure>
  );
}
