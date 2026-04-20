"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit() {
    setLoading(true);
    setError(null);
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.error) {
      setError("Email ou mot de passe incorrect");
    } else {
      router.push("/admin");
    }
    setLoading(false);
  }

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12 bg-[#FDF8F0]">
      <div className="w-full max-w-sm">
        <div className="bg-white border border-[#E8D5B7] rounded-lg p-8">
          <h1 className="font-[var(--font-playfair)] text-2xl text-[#2C2416] mb-2">Espace Admin</h1>
          <p className="font-[var(--font-lato)] text-sm text-[#7A6240] mb-6">Anita Diététique</p>
          <div className="flex flex-col gap-4">
            <input type="email" placeholder="Email" value={email}
              onChange={e => setEmail(e.target.value)}
              className="border border-[#E8D5B7] rounded px-4 py-2 text-sm font-[var(--font-lato)] focus:outline-none focus:border-[#C4832A] bg-[#FDF8F0]"
            />
            <input type="password" placeholder="Mot de passe" value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              className="border border-[#E8D5B7] rounded px-4 py-2 text-sm font-[var(--font-lato)] focus:outline-none focus:border-[#C4832A] bg-[#FDF8F0]"
            />
            {error && <p className="text-red-500 text-sm font-[var(--font-lato)]">{error}</p>}
            <button onClick={handleSubmit} disabled={loading}
              className="bg-[#C4832A] text-[#FDF8F0] font-[var(--font-lato)] text-sm px-6 py-2 rounded hover:bg-[#A36B20] transition-colors">
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
