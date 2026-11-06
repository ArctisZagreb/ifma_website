import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/*
 * On-demand revalidacija iz Sanity webhooka.
 * Sanity -> API -> Webhooks:
 *   URL:        https://<domena>/api/revalidate
 *   Trigger:    Create, Update, Delete
 *   Projection: {_type}
 *   Secret:     ista vrijednost kao env varijabla SANITY_REVALIDATE_SECRET na Vercelu
 * Kad se dokument promijeni, invalidira se samo cache s tagom tog _type-a.
 */
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      return new NextResponse("Missing SANITY_REVALIDATE_SECRET", {
        status: 500,
      });
    }

    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      secret
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }
    if (!body?._type) {
      return new NextResponse("Bad request", { status: 400 });
    }

    revalidateTag(body._type);
    return NextResponse.json({ revalidated: body._type, now: Date.now() });
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}
