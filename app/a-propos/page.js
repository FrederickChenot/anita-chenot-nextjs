export const metadata = { title: "À propos" };

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
          <p>Diplômée en diététique, je vous accompagne dans une démarche personnalisée et bienveillante vers un équilibre alimentaire durable. Mon approche est loin des régimes restrictifs — elle s'appuie sur l'écoute de vos sensations, de vos goûts et de votre mode de vie.</p>
          <p>Je reçois en consultation individuelle à Épinal, et propose également des ateliers culinaires en groupe et des journées thématiques autour de l'alimentation intuitive.</p>
          <p>Mon objectif : vous aider à retrouver une relation sereine et plaisante avec la nourriture, sans frustration ni culpabilité.</p>
        </div>
      </div>
    </main>
  );
}
