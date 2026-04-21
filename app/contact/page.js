export const metadata = {
  title: "Contact",
  description: "Contactez Anita Chenot, diététicienne à Jeuxey (Épinal, 88) — par téléphone, email ou LinkedIn.",
  alternates: { canonical: "/contact" },
};

const CONTACTS = [
  { label: "Téléphone", href: "tel:0606452788", display: "06 06 45 27 88", icon: "📞" },
  { label: "Email", href: "mailto:anitachenot@free.fr", display: "anitachenot@free.fr", icon: "✉️" },
  { label: "LinkedIn", href: "http://www.linkedin.com/in/chenot-anita-bb926b115", display: "Voir le profil", icon: "💼" },
];

export default function ContactPage() {
  return (
    <main className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="font-[var(--font-playfair)] text-4xl text-[#2C2416] mb-4">Contactez-moi</h1>
          <div className="w-10 h-px bg-[#C4832A] mx-auto"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACTS.map(({ label, href, display, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-[#E8D5B7] rounded-lg p-8 text-center hover:border-[#C4832A] transition-colors block">
              <span style={{fontSize: "24px"}}>{icon}</span>
              <h2 className="font-[var(--font-playfair)] text-lg text-[#2C2416] mt-4 mb-2">{label}</h2>
              <p className="font-[var(--font-lato)] text-sm text-[#7A6240]">{display}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
