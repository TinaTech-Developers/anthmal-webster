import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    return NextResponse.json(subscribers, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const { email, source, ipAddress } = data;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    const newSubscriber = new Subscriber({
      email,
      source: source || "Website",
      ipAddress: ipAddress || null,
    });

    await newSubscriber.save();
    return NextResponse.json(newSubscriber, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to add subscriber" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  await connectDB();
  try {
    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const deletedSubscriber = await Subscriber.findOneAndDelete({ email });
    if (!deletedSubscriber) {
      return NextResponse.json(
        { error: "Subscriber not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Subscriber deleted" },
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
