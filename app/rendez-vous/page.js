import RendezVousClient from "./RendezVousClient";

export const metadata = {
  title: "Rendez-vous",
  description: "Réservez une consultation en ligne avec Anita Chenot, diététicienne à Épinal et Jeuxey (Vosges), via ClicRDV ou par téléphone.",
  alternates: { canonical: "/rendez-vous" },
};

export default function RendezVousPage() {
  return <RendezVousClient />;
}
