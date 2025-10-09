import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const { id } = params;
  const newsletter = await Newsletter.findById(id);
  if (!newsletter) {
    return NextResponse.json(
      { message: "Newsletter not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(newsletter);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = params;
  await Newsletter.findByIdAndDelete(id);
  return NextResponse.json({ message: "Newsletter deleted" }, { status: 200 });
}

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;
  const data = await req.json();
  const updatedNewsletter = await Newsletter.findByIdAndUpdate(id, data, {
    new: true,
  });
  return NextResponse.json(updatedNewsletter, { status: 200 });
}
