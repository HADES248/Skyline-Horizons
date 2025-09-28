import { connectToDb } from "@/lib/mongodb/db";
import { propertyModel } from "@/lib/models/listing";

export async function POST(req) {
  try {
    const { parking, furnished, title } = await req.json();

    await connectToDb();

    const filter = {};

    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    if (parking) {
      filter.parking = parking;
    }
    if (furnished) {
      filter.furnished = furnished;
    }

    const properties = await propertyModel.find(filter);

    if (!properties.length) {
      return Response.json({ message: "No properties found" }, { status: 404 });
    }

    return Response.json({ properties }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Server Error", error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDb();

    const properties = await propertyModel.find().limit(5);

    if (!properties.length) {
      return Response.json({ message: "No properties found" }, { status: 404 });
    }

    return Response.json({ properties }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Server Error", error: error.message }, { status: 500 });
  }
}
