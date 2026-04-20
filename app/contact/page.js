export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="font-[var(--font-playfair)] text-4xl text-[#2C2416] mb-4">Contactez-moi</h1>
          <div className="w-10 h-px bg-[#C4832A] mx-auto"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Téléphone", value: "À renseigner", icon: "📞" },
            { label: "Email", value: "À renseigner", icon: "✉️" },
            { label: "LinkedIn", value: "Voir le profil", icon: "💼" },
          ].map(({ label, value, icon }) => (
            <div key={label} className="bg-white border border-[#E8D5B7] rounded-lg p-8 text-center hover:border-[#C4832A] transition-colors">
              <span style={{fontSize: "24px"}}>{icon}</span>
              <h2 className="font-[var(--font-playfair)] text-lg text-[#2C2416] mt-4 mb-2">{label}</h2>
              <p className="font-[var(--font-lato)] text-sm text-[#7A6240]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
