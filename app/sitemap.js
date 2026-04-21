export default function sitemap() {
  const base = "https://www.equilibrealimentaire.fr";
  const now = new Date().toISOString();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/prestations`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/rendez-vous`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/avis`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
