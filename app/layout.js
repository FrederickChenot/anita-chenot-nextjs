import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const lato = Lato({ variable: "--font-lato", weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: { default: "Anita Diététique — Diététicienne à Épinal", template: "%s | Anita Diététique" },
  description: "Anita Chenot, diététicienne nutritionniste à Épinal. Consultations individuelles, ateliers culinaires et accompagnement personnalisé vers l'équilibre alimentaire.",
  metadataBase: new URL("https://www.equilibrealimentaire.fr"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FDF8F0]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
