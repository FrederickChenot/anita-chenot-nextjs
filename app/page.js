import Link from "next/link";
import Image from "next/image";
import { neon } from "@neondatabase/serverless";

async function getPrestations() {
  const sql = neon(process.env.DATABASE_URL);
  const rows = await sql`SELECT * FROM prestation ORDER BY position ASC LIMIT 4`;
  return rows;
}

export default async function Home() {
  const prestations = await getPrestations();
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#C4832A] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('/img/wallpaper.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}/>
        <div className="relative text-center px-6 max-w-2xl mx-auto">
          <p className="font-[var(--font-lato)] text-xs tracking-[4px] text-[#FDF8F0] opacity-80 mb-6 uppercase">Diététicienne — Nutritionniste</p>
          <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl text-[#FDF8F0] leading-tight mb-6">
            Retrouvez l'équilibre<br/>à votre rythme
          </h1>
          <p className="font-[var(--font-lato)] text-base text-[#FDF8F0] opacity-85 leading-relaxed mb-10">
            Un accompagnement personnalisé pour réconcilier plaisir et bien-être alimentaire, sans régime, sans frustration.
          </p>
          <Link href="/rendez-vous" className="inline-block font-[var(--font-lato)] text-xs tracking-[3px] uppercase border border-[#FDF8F0] text-[#FDF8F0] px-10 py-4 hover:bg-[#FDF8F0] hover:text-[#C4832A] transition-colors">
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      {/* Prestations aperçu */}
      <section className="py-20 px-6 bg-[#FDF8F0]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-playfair)] text-3xl text-[#2C2416] mb-4">Mes prestations</h2>
            <div className="w-10 h-px bg-[#C4832A] mx-auto"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prestations.map(p => (
              <div key={p.id} className="bg-white border border-[#E8D5B7] rounded-lg overflow-hidden hover:border-[#C4832A] transition-colors group">
                {p.img && (
                  <div className="relative h-40 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-[var(--font-playfair)] text-base text-[#2C2416] mb-2 capitalize">{p.title}</h3>
                  <p className="font-[var(--font-lato)] text-xs text-[#7A6240] leading-relaxed mb-4 line-clamp-3">{p.description}</p>
                  <p className="font-[var(--font-lato)] text-sm font-bold text-[#C4832A]">{p.prix}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/prestations" className="font-[var(--font-lato)] text-xs tracking-[2px] uppercase text-[#C4832A] border-b border-[#C4832A] pb-1 hover:opacity-70 transition-opacity">
              Voir toutes les prestations
            </Link>
          </div>
        </div>
      </section>

      {/* À propos aperçu */}
      <section className="py-20 px-6 bg-[#F5EDD8]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="w-24 h-24 rounded-full bg-[#E8D5B7] mx-auto mb-8 overflow-hidden">
            <img src="/img/logoSite.png" alt="Anita Chenot" className="w-full h-full object-cover"/>
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl text-[#2C2416] mb-4">Anita Chenot</h2>
          <div className="w-10 h-px bg-[#C4832A] mx-auto mb-6"/>
          <p className="font-[var(--font-lato)] text-sm text-[#5C4A2A] leading-relaxed max-w-xl mx-auto mb-8">
            Diététicienne diplômée, je vous accompagne avec bienveillance vers un équilibre alimentaire durable, adapté à votre mode de vie et à vos goûts. Mon approche est sans régime, sans frustration — juste à votre écoute.
          </p>
          <Link href="/a-propos" className="font-[var(--font-lato)] text-xs tracking-[2px] uppercase text-[#C4832A] border-b border-[#C4832A] pb-1 hover:opacity-70 transition-opacity">
            En savoir plus
          </Link>
        </div>
      </section>

      {/* CTA Rendez-vous */}
      <section className="py-16 px-6 bg-[#2C2416] text-center">
        <h2 className="font-[var(--font-playfair)] text-2xl text-[#FDF8F0] mb-4">Prêt·e à commencer ?</h2>
        <p className="font-[var(--font-lato)] text-sm text-[#8B7355] mb-8">Prenez rendez-vous en ligne, c'est simple et rapide.</p>
        <Link href="/rendez-vous" className="inline-block font-[var(--font-lato)] text-xs tracking-[3px] uppercase border border-[#C4832A] text-[#C4832A] px-10 py-4 hover:bg-[#C4832A] hover:text-[#FDF8F0] transition-colors">
          Prendre rendez-vous
        </Link>
      </section>
    </main>
  );
}
