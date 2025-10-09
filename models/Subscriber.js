import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    source: {
      type: String,
      default: "Website", // Optional field to track where the subscriber came from
    },
    ipAddress: {
      type: String, // optional, if you want to track IP
    },
  },
  { timestamps: true } 
);

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", SubscriberSchema);
