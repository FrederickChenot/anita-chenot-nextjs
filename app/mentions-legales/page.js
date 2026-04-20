export const metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <main className="py-20 px-6">
      <div className="mx-auto max-w-3xl space-y-8 font-[var(--font-lato)] text-sm text-[#5C4A2A] leading-relaxed">
        <h1 className="font-[var(--font-playfair)] text-3xl text-[#2C2416]">Mentions légales</h1>
        {[
          ["Éditeur du site", "Anita Chenot, diététicienne nutritionniste — Épinal (88)"],
          ["Hébergement", "Vercel Inc. — 340 Pine Street, San Francisco, CA 94104, USA"],
          ["Données personnelles", "Ce site ne collecte pas de données personnelles sans votre consentement. Conformément au RGPD, vous disposez d'un droit d'accès et de rectification."],
          ["Propriété intellectuelle", "L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction est interdite sans autorisation préalable."],
        ].map(([titre, texte]) => (
          <div key={titre}>
            <h2 className="font-[var(--font-playfair)] text-lg text-[#2C2416] mb-2">{titre}</h2>
            <p>{texte}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
