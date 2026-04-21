export const metadata = {
  title: "À propos",
  description: "Parcours et formation d'Anita Chenot : DUT diététique à Nancy, 20 ans d'exercice libéral dans les Vosges, DU psychologie du comportement alimentaire.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <main className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="w-32 h-32 rounded-full bg-[#E8D5B7] mx-auto mb-8 overflow-hidden">
            <img src="/img/logoSite.png" alt="Anita Chenot" className="w-full h-full object-cover"/>
          </div>
          <h1 className="font-[var(--font-playfair)] text-4xl text-[#2C2416] mb-4">Anita Chenot</h1>
          <div className="w-10 h-px bg-[#C4832A] mx-auto mb-4"/>
          <p className="font-[var(--font-lato)] text-sm tracking-[2px] text-[#C4832A] uppercase">Diététicienne Nutritionniste</p>
        </div>
        <div className="space-y-6 font-[var(--font-lato)] text-sm text-[#5C4A2A] leading-relaxed">
          <p>De 1995 à 1997, j'ai obtenu un DUT de biologie appliquée, option diététique à Nancy. En 2005, après avoir travaillé dans plusieurs établissements de santé dans différentes régions de France, je me suis installée dans les Vosges pour exercer en libéral. Depuis 2008, je reçois mes patients à Jeuxey pour des consultations individuelles.</p>
          <p>En parallèle, je travaille avec plusieurs EHPAD, j'anime des Ateliers Nutrition Santé pour différents publics et participe aux programmes d'Éducation Thérapeutique du Patient portés par l'Association Vosgienne des Réseaux de Santé (surpoids, diabète, ostéoporose).</p>
          <p>Récemment, dans un souci d'accompagner les personnes vers des changements alimentaires durables, j'ai obtenu un Diplôme Universitaire Psychologie et Pédagogie du Comportement Alimentaire.</p>
        </div>
      </div>
    </main>
  );
}
