import { neon } from "@neondatabase/serverless";
import { getServerSession } from "next-auth";

const sql = neon(process.env.DATABASE_URL);

export async function GET() {
  const session = await getServerSession();
  if (!session) return Response.json({ error: "Non autorisé" }, { status: 401 });
  const rows = await sql`SELECT * FROM prestation ORDER BY position ASC`;
  return Response.json(rows);
}

export async function POST(request) {
  const session = await getServerSession();
  if (!session) return Response.json({ error: "Non autorisé" }, { status: 401 });
  const { title, description, prix, position, img } = await request.json();
  const rows = await sql`
    INSERT INTO prestation (title, description, prix, position, img)
    VALUES (${title}, ${description}, ${prix}, ${position}, ${img})
    RETURNING *
  `;
  return Response.json(rows[0]);
}

export async function PATCH(request) {
  const session = await getServerSession();
  if (!session) return Response.json({ error: "Non autorisé" }, { status: 401 });
  const { id, title, description, prix, position, img } = await request.json();
  const rows = await sql`
    UPDATE prestation SET title=${title}, description=${description},
    prix=${prix}, position=${position}, img=${img}
    WHERE id=${id} RETURNING *
  `;
  return Response.json(rows[0]);
}

export async function DELETE(request) {
  const session = await getServerSession();
  if (!session) return Response.json({ error: "Non autorisé" }, { status: 401 });
  const { id } = await request.json();
  await sql`DELETE FROM prestation WHERE id=${id}`;
  return Response.json({ ok: true });
}
