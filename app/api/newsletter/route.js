import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { NextResponse } from "next/server";

// Get all newsletters
export async function GET() {
  await connectDB();
  const newsletters = await Newsletter.find().sort({ createdAt: -1 });
  return NextResponse.json(newsletters);
}

// Create new newsletter
export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newNewsletter = await Newsletter.create(data);
  return NextResponse.json(newNewsletter, { status: 201 });
}
