import { connectToDb } from "@/lib/mongodb/db";
import { propertyModel } from "@/lib/models/listing";
import { isValidObjectId } from "mongoose";

export async function POST(req) {

  const { id } = await req.json();

  if (!isValidObjectId(id)) return Response.json({ message: "there are no properties" }, { status: 404 });

  await connectToDb();

  const property = await propertyModel.findOne({ _id: id });

  if (!property) {
    return Response.json({ message: "there are no properties" }, { status: 404 });
  }
  return Response.json({ property }, { status: 200 });
}