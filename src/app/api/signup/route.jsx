import { connectToDb } from "@/lib/mongodb/db";
import { userModel } from "@/lib/models/user";

export async function POST(req) {

  const userData = await req.json();

  await connectToDb();

  const user = await userModel.findOne({ email: userData.email });

  if (user) {
    return Response.json({ message: "User already exists" }, { status: 400 })
  }

  await userModel.create(userData);

  return Response.json({ message: "User added successfully" }, { status: 200 });

}
