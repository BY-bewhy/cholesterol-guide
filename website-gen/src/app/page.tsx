import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { NumberChecker } from "./_components/NumberChecker";
import { RiskChecklist } from "./_components/RiskChecklist";

export const metadata: Metadata = {
  title: "건강검진에서 콜레스테롤이 높게 나왔다면 — 두잉두잇",
  description:
    "건강검진에서 콜레스테롤·LDL이 높게 나왔다면? 내 수치의 의미부터 생활습관 관리까지, 한국지질·동맥경화학회 진료지침에 근거해 쉽게 알려드립니다.",
};

const FOOD_GUIDE_URL = "https://cholesterol-guide.vercel.app/cholesterol-food-guide.html";
const ASK_FOOD_URL = "https://cholesterol-guide.vercel.app/meogeodo-dwae.html";
const INSTAGRAM_URL = "https://www.instagram.com/daily.doingdoit/";

const sheetRows = [
  { label: "총콜레스테롤", value: "215", tag: "경계", tone: "success" as const },
  { label: "LDL 콜레스테롤", value: "168", tag: "높음", tone: "error" as const },
  { label: "중성지방", value: "142", tag: "적정", tone: "success" as const },
  { label: "HDL 콜레스테롤", value: "48", tag: "보통", tone: "warning" as const },
];

const sheetTone: Record<"success" | "warning" | "error", string> = {
  success: "bg-success text-success-strong",
  warning: "bg-warning text-warning-strong",
  error: "bg-error text-error-strong",
};

const ldlScale = [
  { label: "적정", range: "<100", tone: "success" as const },
  { label: "정상", range: "100–129", tone: "success" as const },
  { label: "경계", range: "130–159", tone: "warning" as const },
  { label: "높음", range: "160–189", tone: "error" as const },
  { label: "매우높음", range: "≥190", tone: "error" as const },
];
const tcScale = [
  { label: "적정", range: "<200", tone: "success" as const },
  { label: "경계", range: "200–239", tone: "warning" as const },
  { label: "높음", range: "≥240", tone: "error" as const },
];
const tgScale = [
  { label: "적정", range: "<150", tone: "success" as const },
  { label: "경계", range: "150–199", tone: "warning" as const },
  { label: "높음", range: "200–499", tone: "error" as const },
  { label: "매우높음", range: "≥500", tone: "error" as const },
];
const hdlScale = [
  { label: "낮음·주의", range: "≤40", tone: "error" as const },
  { label: "보통", range: "41–59", tone: "warning" as const },
  { label: "좋음", range: "≥60", tone: "success" as const },
];

const scaleTone: Record<"success" | "warning" | "error", string> = {
  success: "bg-success text-success-strong",
  warning: "bg-warning text-warning-strong",
  error: "bg-error text-error-strong",
};

function ScaleRow({
  title,
  items,
}: {
  title: string;
  items: { label: string; range: string; tone: "success" | "warning" | "error" }[];
}) {
  return (
    <div className="mb-md">
      <p className="mb-xs font-text text-copy-strong text-ink">{title}</p>
      <div className="flex gap-xxs overflow-hidden rounded-lg">
        {items.map((it) => (
          <div
            key={it.label}
            className={`flex-1 px-xs py-sm text-center font-text text-caption-strong ${scaleTone[it.tone]}`}
          >
            {it.label}
            <span className="mt-xxs block font-text text-caption">
              {it.range}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LdlGoalTable() {
  const rows = [
    { state: "위험요인 0~1개 · 저위험", goal: "< 160" },
    { state: "위험요인 2개 이상 · 중등도", goal: "< 130" },
    { state: "당뇨병이 있음", goal: "< 100 ~ 70" },
    { state: "이미 심장·뇌혈관 질환을 겪음 · 고위험", goal: "< 70 이하" },
  ];
  return (
    <table className="mt-lg w-full overflow-hidden rounded-xl border border-hairline bg-surface-card text-left font-text text-copy">
      <thead>
        <tr className="bg-surface-soft">
          <th className="px-md py-sm text-caption-strong text-ink">나의 상태</th>
          <th className="px-md py-sm text-caption-strong text-ink">LDL 목표</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.state} className="border-t border-hairline">
            <td className="px-md py-sm text-body">{r.state}</td>
            <td className="px-md py-sm font-text text-copy-strong text-primary">
              {r.goal}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-xs font-text text-caption-strong text-primary">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-sm font-display text-display-md text-ink sm:text-display-lg">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="px-lg pb-xxl pt-section text-center">
          <span className="rounded-full bg-primary-soft px-md py-xs font-text text-caption-strong text-primary">
            건강검진 결과 읽기
          </span>
          <h1 className="mx-auto mt-lg max-w-[480px] font-display text-display-md text-ink sm:text-hero-display">
            건강검진에서
            <br />
            콜레스테롤이
            <br />
            높게 나왔다면
          </h1>
          <p className="mx-auto mt-md max-w-[480px] font-text text-lead text-body">
            증상이 없지만 수치가 어떤 의미인지, 무엇을 알고 있으면 좋을지를
            차근차근 알려 드릴게요.
          </p>
          <div className="mt-lg flex flex-wrap justify-center gap-sm">
            <Button href="#checker" variant="primary">
              내 수치 읽어보기 →
            </Button>
            <Button href="#start" variant="secondary">
              무엇부터 할까?
            </Button>
          </div>

          <div className="mx-auto mt-xl max-w-[340px] rotate-[-2deg] rounded-2xl border border-hairline bg-surface-card p-lg text-left">
            <div className="mb-sm flex justify-between font-text text-caption-strong text-muted">
              <span>건강검진 결과 · 지질검사</span>
              <span>mg/dL</span>
            </div>
            {sheetRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-lg px-sm py-xs font-text text-copy"
              >
                <span className="text-body">{row.label}</span>
                <span className="font-text text-copy-strong text-ink">
                  {row.value}{" "}
                  <span
                    className={`ml-xs rounded px-xs py-0.5 font-text text-caption-strong ${sheetTone[row.tone]}`}
                  >
                    {row.tag}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 1. 왜 신경써야 할까 ── */}
        <section className="bg-surface-soft px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>왜 신경 써야 할까</Eyebrow>
            <SectionHeading>
              증상은 없어요. 그래서 더 챙겨야 해요.
            </SectionHeading>
            <p className="font-text text-copy text-body">
              콜레스테롤이 높아도 몸은 아프지 않아요. 남는 콜레스테롤이 혈관
              벽에 조용히 쌓이며 10년, 20년에 걸쳐 진행되다가, 어느 날 갑자기
              심근경색·뇌졸중으로 나타날 수 있거든요. 검진의 빨간 줄은 미리
              받은 알림이에요.
            </p>

            <div className="mt-lg flex flex-wrap gap-md">
              <div className="min-w-[180px] flex-1 rounded-2xl border border-hairline bg-surface-card p-lg">
                <p className="font-display text-display-md text-primary">
                  4명 중 1명
                </p>
                <p className="mt-xs font-text text-caption text-body">
                  우리나라 성인의 고콜레스테롤혈증 유병률. 2007년보다 약
                  2.5배 늘었어요.
                </p>
              </div>
              <div className="min-w-[180px] flex-1 rounded-2xl border border-hairline bg-surface-card p-lg">
                <p className="font-display text-display-md text-primary">
                  20·30대도
                </p>
                <p className="mt-xs font-text text-caption text-body">
                  젊은 층에서도 수치가 높은 사람이 꾸준히 늘고 있어요. 중년만의
                  문제가 아니에요.
                </p>
              </div>
            </div>

            <p className="mt-lg font-text text-copy text-body">
              <strong className="text-ink">좋은 소식은요</strong> — 검진에서
              막 발견된 단계라면, 대부분 약 없이{" "}
              <strong className="text-ink">생활습관 교정부터</strong> 시작해
              볼 수 있는 위치예요. 일찍 안 게 오히려 기회입니다.
            </p>
          </div>
        </section>

        {/* ── 2. 수치 체커 ── */}
        <section id="checker" className="px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>내 수치 읽기</Eyebrow>
            <SectionHeading>결과지 숫자를 그대로 넣어보세요.</SectionHeading>
            <p className="mb-lg font-text text-copy text-body">
              어디쯤인지 색으로 알려드릴게요. 수치는 내 건강을 보는 여러
              참고 요소 중 하나일 뿐이지만, 일반적으로 LDL·총콜레스테롤·
              중성지방은 낮을수록, HDL은 높을수록 좋은 편이에요.
            </p>

            <NumberChecker />

            <details className="mt-lg rounded-2xl border border-hairline bg-canvas px-lg">
              <summary className="cursor-pointer py-md font-text text-copy-strong text-ink">
                전체 분류 기준표 펼쳐보기
              </summary>
              <div className="pb-md">
                <ScaleRow title="LDL 콜레스테롤" items={ldlScale} />
                <ScaleRow title="총콜레스테롤" items={tcScale} />
                <ScaleRow title="중성지방" items={tgScale} />
                <ScaleRow title="HDL 콜레스테롤 (높을수록 좋음)" items={hdlScale} />
              </div>
            </details>
          </div>
        </section>

        {/* ── 3. 위험도 ── */}
        <section className="bg-surface-soft px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>얼마나 위험할까</Eyebrow>
            <SectionHeading>LDL 숫자 하나로 정해지지 않아요.</SectionHeading>
            <p className="mb-lg font-text text-copy text-body">
              같은 LDL 140이라도, 건강한 30대와 흡연·고혈압이 있는 50대는
              위험이 전혀 달라요. 그래서 다른 위험요인이 몇 개나 있는지를
              함께 봅니다. 한번 세어볼까요?
            </p>

            <RiskChecklist />
            <LdlGoalTable />

            <p className="mt-sm font-text text-caption text-muted">
              ※ 검진에서 처음 발견된 분들은 대부분 위쪽(저·중등도)에
              해당하고 1차 대응은 생활습관 교정이에요. 당뇨·심뇌혈관질환이
              있다면 목표가 더 엄격하니 주치의와 상의하세요.
            </p>
          </div>
        </section>

        {/* ── 4. 생활습관 ── */}
        <section id="start" className="px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>가장 먼저 할 일</Eyebrow>
            <SectionHeading>약보다 먼저, 생활습관부터.</SectionHeading>
            <p className="mb-lg font-text text-copy text-body">
              거창하게 다 바꿀 필요 없어요. 핵심은 딱 세 갈래예요.
            </p>

            <div className="space-y-md">
              <div className="rounded-2xl border border-hairline bg-surface-card p-lg">
                <p className="mb-xs font-display text-display-md text-ink">
                  🍽️ 무엇을 먹는지
                </p>
                <p className="font-text text-copy text-body">
                  <strong className="text-ink">포화·트랜스지방을 줄이고</strong>
                  (고기 비계·버터·튀김·가공식품), 그 자리를{" "}
                  <strong className="text-ink">불포화지방·식이섬유로</strong>
                  (생선·견과·통곡물·채소) 채우는 것. 이 원칙만 기억하면
                  됩니다.
                </p>
                <a
                  href={FOOD_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-md flex items-center gap-md rounded-xl bg-success px-lg py-md no-underline"
                >
                  <span className="text-2xl">🚦</span>
                  <span className="flex-1">
                    <span className="block font-text text-copy-strong text-success-strong">
                      음식별 신호등 가이드 보기
                    </span>
                    <span className="font-text text-caption text-success-strong">
                      어떤 음식을 편하게 / 적당히 / 주의해서 먹으면 되는지
                      한눈에.
                    </span>
                  </span>
                  <span className="font-text text-copy-strong text-success-strong">
                    →
                  </span>
                </a>
                <a
                  href={ASK_FOOD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-sm flex items-center gap-md rounded-xl bg-primary-soft px-lg py-md no-underline"
                >
                  <span className="text-2xl">💬</span>
                  <span className="flex-1">
                    <span className="block font-text text-copy-strong text-primary">
                      먹어도 돼? 직접 물어보기
                    </span>
                    <span className="font-text text-caption text-primary">
                      지금 먹으려는 음식을 입력하면 신호등으로 알려드려요.
                    </span>
                  </span>
                  <span className="font-text text-copy-strong text-primary">
                    →
                  </span>
                </a>
              </div>

              <div className="rounded-2xl border border-hairline bg-surface-card p-lg">
                <p className="mb-xs font-display text-display-md text-ink">
                  🏃 얼마나 움직이는지
                </p>
                <p className="font-text text-copy text-body">
                  운동은 중성지방을 낮추고 좋은 콜레스테롤(HDL)을 올리는
                  데 특히 효과적이에요.
                </p>
                <ul className="mt-sm space-y-xxs font-text text-copy text-body">
                  <li>
                    유산소 — 주 5일 이상, 한 번에 30~60분 (숨이 약간 차는
                    강도)
                  </li>
                  <li>근력 — 주 2~3일, 맨몸 운동이나 가벼운 기구</li>
                  <li>
                    안 했다면 &apos;하루 10분 걷기&apos;부터. 꾸준함이
                    강도보다 중요해요.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-hairline bg-surface-card p-lg">
                <p className="mb-xs font-display text-display-md text-ink">
                  🚭 담배와 술
                </p>
                <p className="font-text text-copy text-body">
                  <strong className="text-ink">금연은 강력히 권합니다.</strong>{" "}
                  흡연은 HDL을 낮추고 혈관을 직접 상하게 해요.{" "}
                  <strong className="text-ink">술은 줄이세요.</strong> 특히
                  중성지방이 높다면 음주가 직접 원인일 때가 많아, 마시더라도
                  하루 1~2잔 이내로.
                </p>
              </div>
            </div>

            <div className="mt-lg rounded-2xl border-l-4 border-primary bg-surface-card p-lg">
              <p className="mb-xs font-text text-copy-strong text-ink">
                기억할 한 가지
              </p>
              <p className="font-text text-copy text-body">
                한 번에 다 바꾸려다 지치기보다,{" "}
                <strong className="text-ink">한 끼씩</strong> 바꿔보세요.
                흰쌀밥에 잡곡을 섞고, 튀김을 구이로 바꾸는 작은 대체가
                쌓이는 게 핵심입니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6.5 (신규) 습관단계 자가진단 — 준비 중 ── */}
        <section className="bg-surface-soft px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>습관, 지금 몇 단계세요?</Eyebrow>
            <SectionHeading>
              약을 잘 챙겨도, 습관이 없으면 안 잡혀요.
            </SectionHeading>
            <p className="mb-lg font-text text-copy text-body">
              국내 연구(SNUH 2021)에서는 약물 복용 여부보다{" "}
              <strong className="text-ink">
                규칙적 운동·균형식·적극적인 삶·타인돕기
              </strong>{" "}
              4가지 생활습관이 수치 조절과 더 강하게 연관됐어요.
            </p>

            <Card variant="dark" eyebrow="준비 중" title="지금 내 단계는?">
              행동변화단계(TTM)에 맞춘 자가진단으로, 다음에 할 행동 한
              가지를 짚어드리는 도구를 준비하고 있어요.
            </Card>

            <div className="mt-md">
              <Button href={INSTAGRAM_URL} variant="secondary">
                준비 중 — 오픈 알림 받기
              </Button>
            </div>
          </div>
        </section>

        {/* ── 5. 약 ── */}
        <section className="px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>약은 언제부터</Eyebrow>
            <SectionHeading>바로 약을 먹는 건 아니에요.</SectionHeading>
            <p className="mb-lg font-text text-copy text-body">
              위험이 낮거나 중간 정도라면, 보통{" "}
              <strong className="text-ink">
                몇 주~몇 달간 생활습관을 바꿔본 뒤
              </strong>{" "}
              그래도 목표에 못 미칠 때 약을 고려해요. 반대로 이미 심·뇌혈관
              질환이 있거나 LDL이 아주 높으면 처음부터 함께 시작하기도
              합니다.
            </p>
            <div className="rounded-2xl border-l-4 border-primary bg-surface-card p-lg">
              <p className="mb-xs font-text text-copy-strong text-ink">
                약물치료 여부는 의료진과 상담 후 결정하세요
              </p>
              <p className="font-text text-copy text-body">
                약을 시작할지, 어떤 약을 얼마나 쓸지는 개인의 위험도·동반
                질환·수치에 따라 달라지는 의학적 판단이에요. 검진 결과지를
                들고 의료진과 상담하신 뒤 함께 결정하시길 추천드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. 놓치기 쉬운 것 ── */}
        <section className="bg-surface-soft px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>놓치기 쉬운 것</Eyebrow>
            <SectionHeading>
              특히 젊은 분들이 자주 지나치는 것
            </SectionHeading>
            <div className="space-y-md">
              <div className="rounded-2xl border-l-4 border-primary bg-surface-card p-lg">
                <p className="mb-xs font-text text-copy-strong text-ink">
                  ① &ldquo;젊으니까 괜찮겠지&rdquo;라는 함정
                </p>
                <p className="font-text text-copy text-body">
                  증상이 없으니 20·30대는 더 방심하기 쉬워요. 하지만 혈관에
                  쌓이는 건 이미 젊을 때부터 시작됩니다. 일찍 관리할수록
                  평생 위험이 낮아져요.
                </p>
              </div>
              <div className="rounded-2xl border-l-4 border-primary bg-surface-card p-lg">
                <p className="mb-xs font-text text-copy-strong text-ink">
                  ② 가족력 — 젊은데 LDL이 유난히 높다면
                </p>
                <p className="font-text text-copy text-body">
                  식습관과 무관하게 유전적으로 콜레스테롤이 매우 높은{" "}
                  <strong className="text-ink">가족성 고콜레스테롤혈증</strong>
                  이 있어요. 젊은 나이에 LDL이 190 이상이거나, 가족 중 이른
                  나이에 심장병을 겪은 분이 있다면 의료진과 상의해보세요.
                </p>
              </div>
              <div className="rounded-2xl border-l-4 border-primary bg-surface-card p-lg">
                <p className="mb-xs font-text text-copy-strong text-ink">
                  ③ 다른 원인이 숨어 있을 수도
                </p>
                <p className="font-text text-copy text-body">
                  갑상선 기능 저하, 신장질환, 일부 약물도 콜레스테롤을
                  올려요(이차성 이상지질혈증). 생활습관 관리에도 잘 안
                  떨어지면 이런 원인을 함께 확인합니다.
                </p>
              </div>
              <div className="rounded-2xl border-l-4 border-primary bg-surface-card p-lg">
                <p className="mb-xs font-text text-copy-strong text-ink">
                  ④ 수치는 컨디션에 영향을 받을 수 있어요
                </p>
                <p className="font-text text-copy text-body">
                  콜레스테롤 수치는 그날의 컨디션이나 식사 등에 따라 달라질
                  수 있어요. 검사 주기와 재검 필요 여부는 의료진과 상담하신
                  뒤 결정하시길 추천드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 요약 ── */}
        <section className="px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>한 장 요약</Eyebrow>
            <Card variant="dark" title="검진에서 콜레스테롤이 높게 나왔다면">
              <ol className="space-y-sm">
                <li>
                  1. 증상은 없어도 혈관엔 쌓여요.{" "}
                  <strong className="text-on-dark">
                    지금이 가장 되돌리기 쉬운 때.
                  </strong>
                </li>
                <li>
                  2. 수치는 참고 요소예요. 그래도 LDL·총콜·중성지방은
                  낮을수록, HDL은 높을수록 좋은 편.
                </li>
                <li>
                  3. 처음 발견됐다면{" "}
                  <strong className="text-on-dark">
                    약보다 생활습관 교정이 먼저
                  </strong>
                  인 경우가 많아요.
                </li>
                <li>
                  4. 포화·트랜스지방↓, 불포화지방·식이섬유↑ + 주 5회 유산소
                  + 금연·절주.
                </li>
                <li>
                  5. 젊다고 방심 금물.{" "}
                  <strong className="text-on-dark">
                    가족력·아주 높은 LDL은 꼭 의료진과 상의.
                  </strong>
                </li>
              </ol>
            </Card>
          </div>
        </section>

        {/* ── 9.5 (신규) 콜레스테롤 인사이트 — 준비 중 ── */}
        <section className="bg-surface-soft px-lg py-section">
          <div className="mx-auto max-w-[680px]">
            <Eyebrow>콜레스테롤 인사이트</Eyebrow>
            <SectionHeading>곧 만나요.</SectionHeading>
            <p className="mb-lg font-text text-copy text-body">
              검진수치 해석부터 식단·운동까지, 더 깊은 이야기를 글로
              준비하고 있어요.
            </p>
            <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
              <Card variant="light" eyebrow="준비 중" title="약을 챙겨도 안 잡히는 이유">
                4가지 습관 체크 — 약물보다 강한 연관성을 보인 생활습관
                이야기.
              </Card>
              <Card variant="light" eyebrow="준비 중" title="지금 내 단계는?">
                행동변화단계(TTM) 자가진단으로 다음 행동 한 가지를 짚어
                드려요.
              </Card>
            </div>
            <div className="mt-lg">
              <Button href={INSTAGRAM_URL} variant="secondary">
                준비 중 — 인스타에서 먼저 만나기
              </Button>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="px-lg py-section text-center">
          <SectionHeading>
            오늘의 작은 변화가 내일의 나를 만들어요.
          </SectionHeading>
          <p className="mb-lg font-text text-lead text-body">
            지금, 함께 시작해보실래요?
          </p>
          <div className="flex flex-wrap justify-center gap-sm">
            <Button href={FOOD_GUIDE_URL} variant="primary">
              🚦 음식별 가이드
            </Button>
            <Button href={ASK_FOOD_URL} variant="secondary">
              💬 먹어도 돼?
            </Button>
            <Button href="#checker" variant="secondary">
              내 수치 다시 보기
            </Button>
            <Button href={INSTAGRAM_URL} variant="primary">
              두잉두잇 더 알아보기 →
            </Button>
          </div>
        </section>

        {/* ── 근거 자료 ── */}
        <section className="px-lg pb-section">
          <div className="mx-auto max-w-[680px] border-t border-hairline pt-lg">
            <p className="mb-sm font-text text-caption-strong text-ink">
              근거 자료
            </p>
            <ul className="space-y-xxs font-text text-caption text-muted">
              <li>
                한국지질·동맥경화학회, 이상지질혈증 진료지침 제5판 (2022,
                2023 수정본)
              </li>
              <li>
                한국지질·동맥경화학회, Dyslipidemia Fact Sheet in Korea 2024
              </li>
              <li>한국지질·동맥경화학회 공식 홈페이지 lipid.or.kr</li>
            </ul>
            <p className="mt-md font-text text-fine-print text-muted">
              본 내용은 위 자료에 근거한 일반 참고 정보이며, 의학적
              진단·치료·처방을 대체하지 않습니다. 개인의 검사 수치, 동반
              질환, 복용 약물에 따라 적절한 관리는 달라질 수 있으니, 구체적인
              판단과 치료는 반드시 의료진과 상담하세요.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
