import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  sell: {
    type: Boolean,
    required: true
  },
  rent: {
    type: Boolean,
    required: true
  },
  parking: {
    type: Boolean,
    required: true
  },
  furnished: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  images: [
    {
      url: { type: String, required: true },
      alt: { type: String, required: true }
    }
  ]
})

export const propertyModel = mongoose.models.property || mongoose.model("property", propertySchema);