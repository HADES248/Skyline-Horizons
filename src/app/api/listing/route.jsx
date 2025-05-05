import { connectToDb } from "@/lib/mongodb/db";
import { propertyModel } from "@/lib/models/listing";

export async function POST(req) {

  const { parking, furnished } = await req.json();

  await connectToDb();

  const filter = {}

  if (parking) filter.parking = parking;
  if (furnished) filter.furnished = furnished;
  const properties = await propertyModel.find(filter);
  return Response.json({ properties }, { status: 200 });
}


export async function GET() {

  await connectToDb();
  const properties = await propertyModel.find().limit(5);
  if (!properties) {
    return Response.json({ message: "No Properties Found" }, { status: 404 });
  }
  return Response.json({ properties }, { status: 200 });
}

