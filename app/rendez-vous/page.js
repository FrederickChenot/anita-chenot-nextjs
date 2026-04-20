import Link from "next/link";

export const metadata = { title: "Prendre rendez-vous" };

export default function RendezVousPage() {
  return (
    <main className="py-20 px-6 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl w-full">
        <div className="bg-white border border-[#E8D5B7] rounded-lg overflow-hidden">
          <div className="relative h-48 bg-[#C4832A]">
            <img src="/img/japanOutside.jpg" alt="Rendez-vous" className="w-full h-full object-cover opacity-60"/>
          </div>
          <div className="p-10 text-center">
            <h1 className="font-[var(--font-playfair)] text-3xl text-[#2C2416] mb-4">Prendre rendez-vous</h1>
            <div className="w-10 h-px bg-[#C4832A] mx-auto mb-6"/>
            <p className="font-[var(--font-lato)] text-sm text-[#5C4A2A] leading-relaxed mb-8">
              Prenez rendez-vous en ligne directement via Clicrdv. Vous serez redirigé vers le site de réservation.
            </p>
            <a href="https://www.clicrdv.com" target="_blank" rel="noopener noreferrer"
              className="inline-block font-[var(--font-lato)] text-xs tracking-[3px] uppercase bg-[#C4832A] text-[#FDF8F0] px-10 py-4 hover:bg-[#A36B20] transition-colors">
              Réserver en ligne
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
