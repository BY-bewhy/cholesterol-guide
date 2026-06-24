"use client";

import { useState } from "react";

const riskFactors = [
  "나이 — 남성 만 45세 이상 또는 여성 만 55세 이상",
  "담배를 피운다",
  "고혈압이 있다 (또는 혈압약 복용 중)",
  "가족력 — 부모·형제자매가 이른 나이(남 55·여 65세 미만)에 심장병을 겪음",
  "HDL(좋은 콜레스테롤)이 40 미만으로 낮다",
];

export function RiskChecklist() {
  const [checked, setChecked] = useState<boolean[]>(
    Array(riskFactors.length).fill(false),
  );
  const [hdlHigh, setHdlHigh] = useState(false);

  const rawCount = checked.filter(Boolean).length;
  const count = hdlHigh && rawCount > 0 ? rawCount - 1 : rawCount;

  return (
    <div className="rounded-2xl border border-hairline bg-surface-card p-lg">
      <p className="mb-sm font-text text-copy-strong text-ink">
        나에게 해당하는 것을 체크해보세요
      </p>
      <div className="divide-y divide-hairline">
        {riskFactors.map((label, i) => (
          <label
            key={label}
            className="flex cursor-pointer items-start gap-sm py-sm font-text text-copy text-body"
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() =>
                setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)))
              }
              className="mt-1 h-5 w-5 accent-primary"
            />
            <span>{label}</span>
          </label>
        ))}
        <label className="flex cursor-pointer items-start gap-sm py-sm font-text text-copy text-muted">
          <input
            type="checkbox"
            checked={hdlHigh}
            onChange={() => setHdlHigh((v) => !v)}
            className="mt-1 h-5 w-5 accent-primary"
          />
          <span>참고 — HDL이 60 이상으로 높다 (오히려 위험을 하나 빼줘요)</span>
        </label>
      </div>
      <p className="mt-md rounded-lg bg-primary-soft px-md py-sm font-text text-copy-strong text-ink">
        {count <= 1
          ? `주요 위험요인 ${count}개 — 저위험에 가까워요. LDL 목표는 보통 160 미만, 1차로 생활습관 교정부터.`
          : `주요 위험요인 ${count}개 — 중등도 이상. LDL 목표가 130 미만으로 더 낮아져요. 의료진 상담을 권해요.`}
      </p>
    </div>
  );
}
