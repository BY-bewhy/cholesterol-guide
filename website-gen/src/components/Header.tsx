import Link from "next/link";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/food-guide", label: "음식가이드" },
  { href: "/ask", label: "먹어도 돼?" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-lg">
        <Link href="/" className="font-display text-tagline text-ink">
          두잉두잇<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-lg sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-text text-nav-link text-body hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          href="https://www.instagram.com/daily.doingdoit/"
          variant="primary"
        >
          인스타그램
        </Button>
      </div>
    </header>
  );
}
