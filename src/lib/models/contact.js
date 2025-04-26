import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

export const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema);