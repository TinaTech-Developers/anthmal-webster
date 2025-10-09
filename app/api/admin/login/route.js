// app/api/admin/login/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const admin = await Admin.findOne({ email });
  if (!admin)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const isMatch = await admin.comparePassword(password);
  if (!isMatch)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, {
    expiresIn: "2h",
  });

  return NextResponse.json({ token });
}
