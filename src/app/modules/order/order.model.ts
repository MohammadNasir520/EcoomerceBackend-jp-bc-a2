import mongoose from "mongoose";
import { IOrder } from "./order.interface";

const { Schema } = mongoose;

const productSchema = new Schema<IOrder>({
  email: {
    type: String,
  },
  productId: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

export const Order = mongoose.model<IOrder>("orders", productSchema);
