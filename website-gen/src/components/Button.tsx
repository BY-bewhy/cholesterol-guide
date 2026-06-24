import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "utility";

const base =
  "inline-flex items-center justify-center gap-xs font-text transition-colors";

// Shape/typography grammar follows DESIGN-apple.md (pill primary/secondary in
// text-copy, dark rect utility in text-button-utility); colors follow
// DESIGN-claude.md (coral primary, canvas/ink neutrals).
const variantClasses: Record<Variant, string> = {
  primary:
    "rounded-full bg-primary px-lg py-sm text-copy text-on-primary hover:bg-primary-active",
  secondary:
    "rounded-full border border-primary bg-transparent px-lg py-sm text-copy text-primary hover:bg-primary-soft",
  utility:
    "rounded-md bg-ink px-md py-xs text-button-utility text-on-dark hover:opacity-90",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, variant: _v, children: _c, className: _cl, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v2, children: _c2, className: _cl2, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
