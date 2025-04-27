import { connectToDb } from "@/lib/mongodb/db";
import { userModel } from "@/lib/models/user";

export async function POST(req) {

  const { email, password } = await req.json();

  await connectToDb();

  const user = await userModel.findOne({ email });

  if (!user) {
    return Response.json({ message: "User Does not exist" }, { status: 400 })
  } else if (password !== user.password) {
    return Response.json({ message: "Password is incorrect" }, { status: 400 })
  }
  return Response.json({ user }, { status: 200 })
}