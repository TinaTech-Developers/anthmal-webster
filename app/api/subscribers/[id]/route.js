import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const deleted = await Subscriber.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Subscriber not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Subscriber deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete subscriber" },
      { status: 500 }
    );
  }
}
export async function PUT(req, { params }) {
  await connectDB();
  try {
    const data = await req.json();
    const updated = await Subscriber.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    if (!updated) {
      return NextResponse.json(
        { error: "Subscriber not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to update subscriber" },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  await connectDB();
  try {
    const subscriber = await Subscriber.findById(params.id);
    if (!subscriber) {
      return NextResponse.json(
        { error: "Subscriber not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(subscriber, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch subscriber" },
      { status: 500 }
    );
  }
}
