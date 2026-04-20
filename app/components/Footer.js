import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#2C2416] py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4">
        <div className="w-px h-8 bg-[#C4832A] opacity-40"/>
        <p className="font-[var(--font-lato)] text-xs text-[#8B7355] tracking-wide">
          ANITA DIÉTÉTIQUE — ÉPINAL, VOSGES
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            ["/prestations", "Prestations"],
            ["/contact", "Contact"],
            ["/avis", "Avis"],
            ["/mentions-legales", "Mentions légales"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="font-[var(--font-lato)] text-xs text-[#8B7355] hover:text-[#C4832A] transition-colors tracking-wide">
              {label}
            </Link>
          ))}
        </nav>
        <p className="font-[var(--font-lato)] text-xs text-[#5C4A2A]">© 2026 Anita Chenot</p>
      </div>
    </footer>
  );
}
