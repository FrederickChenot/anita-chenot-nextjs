"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/app/components/ImageUpload";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ p, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: p.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border border-[#E8D5B7] rounded-lg p-5 flex items-center gap-4"
    >
      <button
        {...attributes}
        {...listeners}
        className="text-[#C4832A] text-lg cursor-grab active:cursor-grabbing flex-shrink-0 px-1 touch-none"
        aria-label="Réordonner"
      >
        ☰
      </button>
      {p.img && (
        <img src={p.img} alt={p.title} className="w-16 h-16 object-cover rounded flex-shrink-0" />
      )}
      <div className="flex-1 min-w-0">
        <p className="font-[var(--font-playfair)] text-base text-[#2C2416] capitalize">{p.title}</p>
        <p className="font-[var(--font-lato)] text-xs text-[#C4832A] mt-1">{p.prix}</p>
        <p className="font-[var(--font-lato)] text-xs text-[#7A6240] mt-1 truncate">{p.description}</p>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <button
          onClick={() => onEdit(p)}
          className="font-[var(--font-lato)] text-xs border border-[#E8D5B7] text-[#7A6240] px-3 py-1.5 rounded hover:border-[#C4832A] hover:text-[#C4832A] transition-colors"
        >
          Modifier
        </button>
        <button
          onClick={() => onDelete(p.id)}
          className="font-[var(--font-lato)] text-xs border border-red-200 text-red-400 px-3 py-1.5 rounded hover:border-red-400 transition-colors"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [prestations, setPrestations] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", prix: "", position: "", img: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (session) fetchPrestations();
  }, [session]);

  async function fetchPrestations() {
    const res = await fetch("/api/admin/prestations");
    const data = await res.json();
    setPrestations(data);
  }

  function startEdit(p) {
    setEditing(p.id);
    setForm({ title: p.title, description: p.description, prix: p.prix, position: p.position, img: p.img || "" });
  }

  function startNew() {
    setEditing("new");
    setForm({ title: "", description: "", prix: "", position: prestations.length + 1, img: "" });
  }

  async function save() {
    setLoading(true);
    if (editing === "new") {
      await fetch("/api/admin/prestations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("/api/admin/prestations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, id: editing }),
      });
    }
    setEditing(null);
    setMessage("Sauvegardé ✓");
    setTimeout(() => setMessage(null), 3000);
    await fetchPrestations();
    setLoading(false);
  }

  async function deletePrest(id) {
    if (!confirm("Supprimer cette prestation ?")) return;
    await fetch("/api/admin/prestations", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await fetchPrestations();
  }

  async function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = prestations.findIndex((p) => p.id === active.id);
    const newIndex = prestations.findIndex((p) => p.id === over.id);
    const reordered = arrayMove(prestations, oldIndex, newIndex);

    setPrestations(reordered);

    const order = reordered.map((p, i) => ({ id: p.id, position: i + 1 }));
    await fetch("/api/admin/prestations/reorder", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    });
    setMessage("Ordre sauvegardé ✓");
    setTimeout(() => setMessage(null), 3000);
  }

  if (status === "loading" || !session) return null;

  return (
    <main className="py-12 px-6 bg-[#FDF8F0] min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-[var(--font-playfair)] text-3xl text-[#2C2416]">
            Gestion des <span className="text-[#C4832A]">prestations</span>
          </h1>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="font-[var(--font-lato)] text-xs text-[#7A6240] hover:text-[#C4832A] transition-colors"
          >
            Se déconnecter
          </button>
        </div>

        {message && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-[var(--font-lato)] px-4 py-3 rounded mb-6">
            {message}
          </div>
        )}

        {editing && (
          <div className="bg-white border border-[#E8D5B7] rounded-lg p-6 mb-8">
            <h2 className="font-[var(--font-playfair)] text-xl text-[#2C2416] mb-4">
              {editing === "new" ? "Nouvelle prestation" : "Modifier la prestation"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                ["Titre", "title", "text"],
                ["Prix", "prix", "text"],
              ].map(([label, key, type]) => (
                <div key={key}>
                  <label className="font-[var(--font-lato)] text-xs text-[#7A6240] uppercase tracking-wide mb-1 block">{label}</label>
                  <input
                    type={type}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full border border-[#E8D5B7] rounded px-4 py-2 text-sm font-[var(--font-lato)] focus:outline-none focus:border-[#C4832A] bg-[#FDF8F0]"
                  />
                </div>
              ))}
              <div>
                <label className="font-[var(--font-lato)] text-xs text-[#7A6240] uppercase tracking-wide mb-1 block">Description</label>
                <textarea
                  value={form.description}
                  rows={4}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full border border-[#E8D5B7] rounded px-4 py-2 text-sm font-[var(--font-lato)] focus:outline-none focus:border-[#C4832A] bg-[#FDF8F0]"
                />
              </div>
              <div>
                <label className="font-[var(--font-lato)] text-xs text-[#7A6240] uppercase tracking-wide mb-1 block">Photo</label>
                <ImageUpload
                  currentImg={form.img}
                  onUpload={(url) => setForm({ ...form, img: url })}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={save}
                disabled={loading}
                className="bg-[#C4832A] text-[#FDF8F0] font-[var(--font-lato)] text-sm px-6 py-2 rounded hover:bg-[#A36B20] transition-colors"
              >
                {loading ? "Sauvegarde..." : "Sauvegarder"}
              </button>
              <button
                onClick={() => setEditing(null)}
                className="border border-[#E8D5B7] text-[#7A6240] font-[var(--font-lato)] text-sm px-6 py-2 rounded hover:border-[#C4832A] transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        )}

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={prestations.map((p) => p.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-4 mb-8">
              {prestations.map((p) => (
                <SortableItem key={p.id} p={p} onEdit={startEdit} onDelete={deletePrest} />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        <button
          onClick={startNew}
          className="font-[var(--font-lato)] text-xs tracking-[2px] uppercase border border-[#C4832A] text-[#C4832A] px-8 py-3 rounded hover:bg-[#C4832A] hover:text-[#FDF8F0] transition-colors"
        >
          + Ajouter une prestation
        </button>
      </div>
    </main>
  );
}
