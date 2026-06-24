"use client";

import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline rounded-2xl border border-hairline bg-canvas">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-md px-lg py-md text-left font-text text-copy-strong text-ink"
            >
              <span>{item.question}</span>
              <span
                className={`text-primary transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                ＋
              </span>
            </button>
            {isOpen && (
              <div className="px-lg pb-md font-text text-copy text-body">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
