"use client";
import { useState } from "react";

export default function RendezVousPage() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <main className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-[var(--font-playfair)] text-4xl text-[#2C2416] mb-4">
            Prendre rendez-vous
          </h1>
          <div className="w-10 h-px bg-[#C4832A] mx-auto mb-6"/>
          <p className="font-[var(--font-lato)] text-sm text-[#5C4A2A]">
            Réservez directement en ligne — vous recevrez une confirmation par email.
          </p>
        </div>

        {!iframeError ? (
          <div className="bg-white border border-[#E8D5B7] rounded-lg overflow-hidden">
            <iframe
              src="https://www.clicrdv.com/anita-chenot"
              width="100%"
              height="650"
              frameBorder="0"
              onError={() => setIframeError(true)}
              title="Prise de rendez-vous Anita Chenot"
            />
          </div>
        ) : (
          <div className="bg-white border border-[#E8D5B7] rounded-lg p-10 text-center">
            <p className="font-[var(--font-lato)] text-sm text-[#5C4A2A] mb-6">
              La réservation en ligne s'ouvre dans une nouvelle fenêtre.
            </p>
            <a
              href="https://www.clicrdv.com/anita-chenot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-[var(--font-lato)] text-xs tracking-[3px] uppercase bg-[#C4832A] text-[#FDF8F0] px-10 py-4 hover:bg-[#A36B20] transition-colors"
            >
              Réserver en ligne →
            </a>
          </div>
        )}

        <p className="text-center font-[var(--font-lato)] text-xs text-[#8B7355] mt-6">
          Vous pouvez aussi appeler directement au{" "}
          <a href="tel:0606452788" className="text-[#C4832A] hover:underline">
            06 06 45 27 88
          </a>
        </p>
      </div>
    </main>
  );
}
