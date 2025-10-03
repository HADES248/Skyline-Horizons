import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb/db";
import { userModel } from "@/lib/models/user";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcrypt';

export async function POST(req) {

  const userData = await req.json();

  await connectToDb();

  const user = await userModel.findOne({ email: userData.email });

  if (user) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 })
  }

  // hash passowrd
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(userData.password, salt);

  const newUser = await userModel.create({
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
    phone: userData.phone
  })

  const tokenData = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email
    }
  
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
    const response = NextResponse.json({ user: tokenData }, { status: 200 })
  
    response.cookies.set("token", token, {
      httpOnly: true
    })

  return response;

}
