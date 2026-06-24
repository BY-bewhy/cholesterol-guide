import type { ReactNode } from "react";

type CardProps = {
  variant?: "light" | "dark";
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Card({
  variant = "light",
  eyebrow,
  title,
  children,
  className = "",
}: CardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-2xl p-xl ${
        isDark ? "bg-surface-dark text-on-dark" : "bg-surface-card text-ink"
      } ${className}`}
    >
      {eyebrow && (
        <p className="mb-xs font-text text-caption-strong text-primary">
          {eyebrow}
        </p>
      )}
      <h3 className="mb-sm font-display text-display-md">{title}</h3>
      <div
        className={`font-text text-copy ${
          isDark ? "text-on-dark-soft" : "text-body"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
