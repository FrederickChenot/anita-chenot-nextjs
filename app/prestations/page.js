import { neon } from "@neondatabase/serverless";

export const metadata = {
  title: "Prestations",
  description: "Découvrez les consultations individuelles, ateliers culinaires et journées sensations alimentaires proposés par Anita Chenot, diététicienne à Épinal (Vosges).",
  alternates: { canonical: "/prestations" },
};

async function getPrestations() {
  const sql = neon(process.env.DATABASE_URL);
  return await sql`SELECT * FROM prestation ORDER BY position ASC`;
}

export default async function PrestationsPage() {
  const prestations = await getPrestations();
  return (
    <main className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="font-[var(--font-lato)] text-xs tracking-[3px] text-[#C4832A] uppercase">Consultations & ateliers</span>
          <h1 className="font-[var(--font-playfair)] text-4xl text-[#2C2416] mt-3 mb-4">Mes prestations</h1>
          <div className="w-10 h-px bg-[#C4832A] mx-auto"/>
        </div>
        <div className="space-y-16">
          {prestations.map((p, i) => (
            <div key={p.id} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center border-b border-[#E8D5B7] pb-16 last:border-0`}>
              {p.img && (
                <div className="w-full md:w-2/5 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h2 className="font-[var(--font-playfair)] text-2xl text-[#2C2416] mb-3 capitalize">{p.title}</h2>
                <div className="w-8 h-px bg-[#C4832A] mb-4"/>
                <p className="font-[var(--font-lato)] text-sm text-[#5C4A2A] leading-relaxed mb-6">{p.description}</p>
                <p className="font-[var(--font-lato)] text-lg font-bold text-[#C4832A]">{p.prix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
