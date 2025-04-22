import { connectToDb } from "@/lib/mongodb/db";
import { propertyModel } from "@/lib/models/listing";

export async function POST(req) {

  const property = await req.json();

  await connectToDb();

  await propertyModel.create(property).then(() => {
    console.log("Property Enlisted");
  });

  return Response.json({ message: "Property Enlisted Successfully!" }, { status: 200 });

}

export async function GET() {

  await connectToDb();

  const properties = await propertyModel.find();
  if (!properties) {
    return Response.json({ message: "there are no properties" }, { status: 404 });
  }
  return Response.json({ properties }, { status: 200 });
}
