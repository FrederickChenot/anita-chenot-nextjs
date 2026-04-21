import { neon } from "@neondatabase/serverless";
import { getServerSession } from "next-auth";

const sql = neon(process.env.DATABASE_URL);

export async function PATCH(request) {
  const session = await getServerSession();
  if (!session) return Response.json({ error: "Non autorisé" }, { status: 401 });
  const { order } = await request.json();
  // order: [{ id, position }, ...]
  await Promise.all(
    order.map(({ id, position }) =>
      sql`UPDATE prestation SET position=${position} WHERE id=${id}`
    )
  );
  return Response.json({ ok: true });
}
