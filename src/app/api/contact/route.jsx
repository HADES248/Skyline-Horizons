import { connectToDb } from "@/lib/mongodb/db";
import { contactModel } from "@/lib/models/contact";

export async function POST(req) {

  const queryDetails = await req.json();

  await connectToDb();

  await contactModel.create(queryDetails).then(() => {
    console.log("Query Enlished!");
  }).catch((err) => {
    console.error("Error:", err.message);
  });

  return Response.json({ message: "Query Enlisted Successfully!" }, { status: 200 });

}
