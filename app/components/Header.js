"use client";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/prestations", label: "Prestations" },
  { href: "/rendez-vous", label: "Rendez-vous" },
  { href: "/avis", label: "Avis" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#FDF8F0] border-b border-[#E8D5B7] sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full border border-[#8B6914] flex items-center justify-center text-[10px] text-[#8B6914] text-center leading-tight font-[var(--font-lato)]">
            Anita<br/>diét.
          </div>
          <span className="text-[11px] tracking-[3px] text-[#2C2416] font-[var(--font-lato)]">ANITA DIÉTÉTIQUE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="font-[var(--font-lato)] text-sm tracking-wide text-[#5C4A2A] hover:text-[#C4832A] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-[#5C4A2A]" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FDF8F0] border-t border-[#E8D5B7] px-6 py-4 flex flex-col gap-4">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-[var(--font-lato)] text-sm text-[#5C4A2A] hover:text-[#C4832A] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
