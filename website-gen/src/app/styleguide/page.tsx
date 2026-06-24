import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Accordion } from "@/components/Accordion";

// 전부 사이트 실제 배경/면 색 — 파스텔 톤. 진한 "-strong" 색은 면이 아니라
// 작은 텍스트/뱃지에만 쓰므로 별도로 Status pill에서 보여준다.
const colorSwatches = [
  { name: "primary", hex: "#f2811d" },
  { name: "primary-active", hex: "#dd7012" },
  { name: "primary-soft", hex: "#fdebd7" },
  { name: "ink", hex: "#3d2b1f" },
  { name: "body", hex: "#6b543d" },
  { name: "muted", hex: "#a08465" },
  { name: "canvas", hex: "#faf3e8" },
  { name: "surface-card", hex: "#fffdf9" },
  { name: "surface-dark", hex: "#3d2b1f" },
  { name: "success", hex: "#e9f2e4" },
  { name: "warning", hex: "#fbf0d8" },
  { name: "error", hex: "#fbe7df" },
] as const;

const statusPills = [
  { label: "적정", bg: "bg-success", text: "text-success-strong" },
  { label: "경계", bg: "bg-warning", text: "text-warning-strong" },
  { label: "높음", bg: "bg-error", text: "text-error-strong" },
] as const;

const typeScale = [
  { token: "hero-display", className: "text-hero-display" },
  { token: "display-lg", className: "text-display-lg" },
  { token: "display-md", className: "text-display-md" },
  { token: "lead", className: "text-lead" },
  { token: "tagline", className: "text-tagline" },
  { token: "copy-strong", className: "text-copy-strong" },
  { token: "copy", className: "text-copy" },
  { token: "caption", className: "text-caption" },
] as const;

const faqItems = [
  {
    question: "총콜레스테롤은 정상인데 LDL만 높다고 나왔어요. 위험한가요?",
    answer:
      "네, LDL은 KSoLA 5판에서 위험군 판정의 핵심 지표예요. 위험군(연령·가족력·고혈압·흡연 등)에 따라 목표치가 다르며, 총콜레스테롤이 정상이라도 LDL 단독으로 관리 필요 판정을 받을 수 있어요.",
  },
  {
    question: "약 먹기 전에 식단으로만 낮출 수 있나요?",
    answer:
      "저·중등도 위험군은 KSoLA 5판 기준 수주~수개월 생활습관 교정을 우선 시도해요. 포화지방 7% 이내, 식이섬유 25g/일 등 식사요법 + 운동으로 의미 있는 개선이 가능해요.",
  },
  {
    question: "여성은 폐경 이후 콜레스테롤 관리법이 다른가요?",
    answer:
      "국내 연구(Asan 2009)에서 8주 생활습관 교육 후 LDL 감소율이 여성 8.0% vs 남성 4.95%로 차이가 있었어요. 여성은 폐경 여부가 개선 예측 변수 중 하나로 확인됐어요.",
  },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-xl">
      <h2 className="mb-xs font-display text-display-md text-ink">{title}</h2>
      {description && (
        <p className="mb-lg font-text text-copy text-muted">{description}</p>
      )}
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1200px] px-lg">
        <div className="py-xl">
          <p className="mb-xs font-text text-caption-strong text-primary">
            DESIGN SYSTEM
          </p>
          <h1 className="font-display text-hero-display text-ink">
            스타일가이드
          </h1>
          <p className="mt-sm font-text text-lead text-body">
            색·간격은 DESIGN-claude.md, 폰트·타입스케일은 DESIGN-apple.md 기준.
          </p>
        </div>

        <Section
          title="Colors"
          description="cholesterol-guide.vercel.app 팔레트 — 포인트(코랄/오렌지) 하나만 진하고 나머지는 파스텔"
        >
          <div className="grid grid-cols-2 gap-md sm:grid-cols-3 md:grid-cols-4">
            {colorSwatches.map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-xl border border-hairline"
              >
                <div className="h-20" style={{ backgroundColor: c.hex }} />
                <div className="p-sm">
                  <p className="font-text text-caption-strong text-ink">
                    {c.name}
                  </p>
                  <p className="font-text text-caption text-muted">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-sm mt-lg font-text text-caption text-muted">
            success-strong · warning-strong · error-strong — 면이 아니라
            파스텔 배경 위 작은 텍스트로만 쓰는 진한 색 (수치 판정 뱃지)
          </p>
          <div className="flex flex-wrap gap-sm">
            {statusPills.map((p) => (
              <span
                key={p.label}
                className={`rounded-full px-md py-xs font-text text-caption-strong ${p.bg} ${p.text}`}
              >
                {p.label}
              </span>
            ))}
          </div>
        </Section>

        <Section
          title="Typography"
          description="DESIGN-apple.md 타입스케일 (SF Pro 대체 폰트 Inter)"
        >
          <div className="space-y-md">
            {typeScale.map((t) => (
              <div key={t.token} className="border-b border-hairline pb-md">
                <p className="mb-xxs font-text text-caption text-muted">
                  {t.token}
                </p>
                <p className={`font-display ${t.className} text-ink`}>
                  건강검진에서 콜레스테롤이 높게 나왔다면
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Buttons" description="primary · secondary · utility">
          <div className="flex flex-wrap items-center gap-md">
            <Button variant="primary">무료 상담 신청</Button>
            <Button variant="secondary">자세히 보기</Button>
            <Button variant="utility">메뉴</Button>
          </div>
        </Section>

        <Section title="Cards" description="light · dark">
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
            <Card variant="light" eyebrow="습관 코칭" title="지금 내 단계는?">
              약을 잘 챙겨 먹어도 습관이 없으면 수치가 안 잡혀요. 행동변화단계에
              맞춘 다음 행동 한 가지를 알려드려요.
            </Card>
            <Card variant="dark" eyebrow="콜레스테롤 인사이트" title="준비 중">
              검진수치 해석부터 식단·운동까지, 곧 인스타그램에서 먼저
              만나보실 수 있어요.
            </Card>
          </div>
        </Section>

        <Section title="Accordion" description="FAQ">
          <Accordion items={faqItems} />
        </Section>
      </main>

      <Footer />
    </>
  );
}
