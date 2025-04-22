import { connectToDb } from "@/lib/mongodb/db";
import { propertyModel } from "@/lib/models/listing";

export async function POST(req) {

  const { id } = await req.json();

  await connectToDb();

  const property = await propertyModel.findOne({ _id: id });

  if (!property) {
    return Response.json({ message: "there are no properties" }, { status: 404 });
  }
  return Response.json({ property }, { status: 200 });
}