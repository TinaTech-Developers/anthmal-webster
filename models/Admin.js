import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // ✅ Full name
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed password
    role: {
      type: String,
      enum: ["Editor", "Admin", "Super Admin"],
      default: "Editor",
    }, // ✅ Role
  },
  { timestamps: true } // optional: keeps createdAt/updatedAt
);

// Hash password before saving
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password
AdminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
export default Admin;
