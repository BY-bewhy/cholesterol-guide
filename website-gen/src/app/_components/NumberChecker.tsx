"use client";

import { useState } from "react";

type Tone = "success" | "warning" | "error" | "neutral";
type Verdict = { label: string; tone: Tone };

function classifyTC(v: number): Verdict {
  if (v < 200) return { label: "적정 (<200)", tone: "success" };
  if (v < 240) return { label: "경계 (200–239)", tone: "warning" };
  return { label: "높음 (≥240)", tone: "error" };
}
function classifyLDL(v: number): Verdict {
  if (v < 100) return { label: "적정 (<100)", tone: "success" };
  if (v < 130) return { label: "정상 (100–129)", tone: "success" };
  if (v < 160) return { label: "경계 (130–159)", tone: "warning" };
  if (v < 190) return { label: "높음 (160–189)", tone: "error" };
  return { label: "매우높음 (≥190) — 꼭 상담", tone: "error" };
}
function classifyTG(v: number): Verdict {
  if (v < 150) return { label: "적정 (<150)", tone: "success" };
  if (v < 200) return { label: "경계 (150–199)", tone: "warning" };
  if (v < 500) return { label: "높음 (200–499)", tone: "error" };
  return { label: "매우높음 (≥500) — 꼭 상담", tone: "error" };
}
function classifyHDL(v: number): Verdict {
  if (v <= 40) return { label: "낮음 (≤40) — 주의", tone: "error" };
  if (v < 60) return { label: "보통 (41–59)", tone: "warning" };
  return { label: "좋음 (≥60)", tone: "success" };
}

const toneClasses: Record<Tone, string> = {
  success: "bg-success text-success-strong",
  warning: "bg-warning text-warning-strong",
  error: "bg-error text-error-strong",
  neutral: "bg-surface-soft text-muted",
};

const fields = [
  { id: "tc", label: "총콜레스테롤", placeholder: "예: 215", classify: classifyTC },
  { id: "ldl", label: "LDL 콜레스테롤", placeholder: "예: 140", classify: classifyLDL },
  { id: "tg", label: "중성지방 (TG)", placeholder: "예: 160", classify: classifyTG },
  {
    id: "hdl",
    label: "HDL 콜레스테롤",
    placeholder: "예: 55",
    classify: classifyHDL,
  },
] as const;

export function NumberChecker() {
  const [values, setValues] = useState<Record<string, string>>({});

  return (
    <div className="rounded-2xl border border-hairline bg-surface-card p-lg">
      <p className="mb-xxs font-text text-copy-strong text-ink">
        결과지 숫자 입력
      </p>
      <p className="mb-md font-text text-caption text-muted">
        단위는 모두 mg/dL이에요. 모르는 항목은 비워두어도 됩니다.
      </p>

      <div className="space-y-md">
        {fields.map((f) => {
          const raw = values[f.id] ?? "";
          const num = parseFloat(raw);
          const verdict = raw !== "" && !isNaN(num) ? f.classify(num) : null;
          return (
            <div key={f.id}>
              <label
                htmlFor={f.id}
                className="mb-xs block font-text text-copy-strong text-ink"
              >
                {f.label}
              </label>
              <div className="flex flex-col gap-xs sm:flex-row sm:items-center sm:gap-sm">
                <div className="flex items-center gap-sm">
                  <input
                    id={f.id}
                    type="number"
                    inputMode="numeric"
                    placeholder={f.placeholder}
                    value={raw}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [f.id]: e.target.value }))
                    }
                    className="w-28 rounded-xl border border-hairline bg-canvas px-sm py-xs text-center font-text text-copy-strong text-ink focus:border-primary focus:outline-none"
                  />
                  <span className="font-text text-caption text-muted">
                    mg/dL
                  </span>
                </div>
                <span
                  className={`rounded-lg px-sm py-xs font-text text-caption-strong sm:flex-1 ${
                    verdict ? toneClasses[verdict.tone] : toneClasses.neutral
                  }`}
                >
                  {verdict ? verdict.label : "숫자를 넣어보세요"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-md border-t border-hairline pt-sm font-text text-caption text-muted">
        ※ 이 색 구분은 일반적인 분류 기준이에요. LDL 목표치는 사람마다 다르고,
        정확한 판단은 의료진과 함께 하세요.
      </p>
    </div>
  );
}
