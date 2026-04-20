export const metadata = { title: "Avis & témoignages" };

const AVIS = [
  { nom: "Marie L.", texte: "Anita m'a aidée à retrouver une relation saine avec la nourriture. Son approche bienveillante et ses conseils pratiques ont vraiment changé ma façon de manger au quotidien.", note: 5 },
  { nom: "Sophie M.", texte: "Après des années de régimes frustraants, j'ai enfin trouvé un équilibre grâce aux consultations d'Anita. Je recommande vivement !", note: 5 },
  { nom: "Pierre D.", texte: "Les ateliers culinaires sont une excellente façon de découvrir de nouvelles recettes équilibrées. Convivial et très instructif.", note: 5 },
];

export default function AvisPage() {
  return (
    <main className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-[var(--font-playfair)] text-4xl text-[#2C2416] mb-4">Avis & témoignages</h1>
          <div className="w-10 h-px bg-[#C4832A] mx-auto mb-8"/>
          <a href="https://www.pagesjaunes.fr/contribution/votre-avis-reglemente/51410609?codeRubrique=58400300"
            target="_blank" rel="noopener noreferrer"
            className="inline-block font-[var(--font-lato)] text-xs tracking-[3px] uppercase border border-[#C4832A] text-[#C4832A] px-8 py-3 hover:bg-[#C4832A] hover:text-[#FDF8F0] transition-colors">
            Laisser un avis
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AVIS.map(({ nom, texte, note }) => (
            <div key={nom} className="bg-white border border-[#E8D5B7] rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({length: note}).map((_, i) => (
                  <span key={i} style={{fontSize: "14px", color: "#C4832A"}}>★</span>
                ))}
              </div>
              <p className="font-[var(--font-lato)] text-sm text-[#5C4A2A] leading-relaxed mb-6 italic">"{texte}"</p>
              <p className="font-[var(--font-lato)] text-xs tracking-wide text-[#8B6914] font-bold">{nom}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
