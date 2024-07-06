import mongoose from "mongoose";
import { IProduct } from "./product.interface";

const { Schema } = mongoose;

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  variants: {
    type: [
      {
        type: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
  },
  inventory: {
    type: {
      quantity: {
        type: Number,
      },
      inStock: {
        type: Boolean,
      },
    },
  },
});

export const Product = mongoose.model<IProduct>("products", productSchema);
