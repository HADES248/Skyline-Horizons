import { connectToDb } from "@/lib/mongodb/db";
import { userModel } from "@/lib/models/user";
import bcryptjs from 'bcrypt';
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";

export async function POST(req) {

  const { email, password } = await req.json();

  await connectToDb();

  const user = await userModel.findOne({ email });

  if (!user) {
    return NextResponse.json({ message: "User Does not exist" }, { status: 400 })
  }

  const validPassword = await bcryptjs.compare(password, user.password);

  if (!validPassword) {
    return NextResponse.json({ message: "Password is incorrect" }, { status: 400 })
  }

  // Now we create a token (token is a digital key for identification which we will send to user cookies(small piece of data to user's device to remember them) to stay logged in)
  const tokenData = {
    id: user._id,
    username: user.username,
    email: user.email
  }

  const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
  const response = NextResponse.json({ user }, { status: 200 })

  response.cookies.set("token", token, {
    httpOnly: true
  })

  return response;
}