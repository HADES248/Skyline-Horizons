import { connectToDb } from "@/lib/mongodb/db";
import { userModel } from "@/lib/models/user";

export async function GET() {

  await connectToDb();

  const user = await userModel.find();
  if (!user) {
    return Response.json({ message: "User does not exist" }, { status: 404 });
  }
  return Response.json({ user }, { status: 200 });

}