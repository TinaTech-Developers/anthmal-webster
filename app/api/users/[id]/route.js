import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

async function verifyToken(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;
  const token = authHeader.split(" ")[1];
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// GET single user by ID
export async function GET(req, { params }) {
  await connectDB();
  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const admin = await Admin.findById(params.id).select("-password");
  if (!admin)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(admin);
}

// PUT update user
export async function PUT(req, { params }) {
  await connectDB();
  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, email, role, password } = await req.json();
  const updateData = { name, email, role };
  if (password) updateData.password = password; // optional password update

  try {
    const admin = await Admin.findByIdAndUpdate(params.id, updateData, {
      new: true,
    });
    if (!admin)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const { password: _, ...adminData } = admin.toObject();
    return NextResponse.json(adminData);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE user
export async function DELETE(req, { params }) {
  await connectDB();
  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await Admin.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
