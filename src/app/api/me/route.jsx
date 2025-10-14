import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return NextResponse.json({ user: decodedToken });
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}