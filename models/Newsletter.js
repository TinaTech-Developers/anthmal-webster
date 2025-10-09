import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String },
    date: { type: String },
    image: { type: String },
    description: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Newsletter ||
  mongoose.model("Newsletter", NewsletterSchema);
