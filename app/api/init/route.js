import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);
export async function GET() {
  await sql`
    CREATE TABLE IF NOT EXISTS prestation (
      id SERIAL PRIMARY KEY,
      img TEXT,
      title TEXT NOT NULL,
      description TEXT,
      prix TEXT,
      position INTEGER DEFAULT 0
    )
  `;
  await sql`
    INSERT INTO prestation (img, title, description, prix, position) VALUES
    ('https://res.cloudinary.com/dkrfh1jzy/image/upload/v1649320094/fleur_ln0o6g.jpg', 'Bilan initial', 'Au cours d''un entretien d''1h à 1h15, je réalise avec vous un bilan de vos habitudes et expériences alimentaires et de votre mode de vie, puis nous définissons ensemble vos objectifs réalistes de changements.', '50 €', 1),
    ('https://res.cloudinary.com/dkrfh1jzy/image/upload/v1649410093/tulipe_dxadil.jpg', 'Consultations de suivi', 'Elles peuvent durer de 45 minutes à 1h selon les besoins. Ces entretiens permettent de faire le point sur ce que vous avez mis en place et sur vos difficultés rencontrées.', '30 € pour 45 min — 40 € pour 1h', 2),
    ('https://res.cloudinary.com/dkrfh1jzy/image/upload/v1649410093/abeille_sus17h.jpg', 'Ateliers culinaires', 'Séances animées pour un groupe de 6 à 8 personnes. Je vous accueille dans ma cuisine et vous propose de préparer un repas équilibré à partir de produits locaux et de saison.', '40 € / personne', 3),
    ('https://res.cloudinary.com/dkrfh1jzy/image/upload/v1649410092/arbre_seocli.jpg', 'Journée à l''écoute de mes sensations', 'Journée animée pour un groupe de 6 à 8 personnes, un temps pour réfléchir à l''attention que vous portez à vos sensations alimentaires : faim, rassasiement.', '40 € / personne', 4)
    ON CONFLICT DO NOTHING
  `;
  return Response.json({ ok: true });
}
