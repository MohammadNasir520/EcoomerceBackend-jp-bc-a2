import { IProduct } from "../product/product.interface";
import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const insertIntoDB = async (data: IOrder) => {
  console.log("data", data);
  const isExist: any = await Product.findById(data.productId);
  console.log("isExist", isExist);
  if (!isExist) {
    return {
      founded: false,
      message: "product not found",
    };
  }
  if (!isExist.inventory.inStock) {
    return {
      founded: false,
      message: "product not in stock",
    };
  }
  if (isExist.inventory.quantity < data.quantity) {
    return {
      founded: false,
      message: `order not created because your ordered more ${
        data?.quantity - isExist.inventory.quantity
      } than in our stock`,
    };
  }

  const newQuantity = isExist.inventory.quantity - data.quantity;

  if (isExist.inventory.quantity > data.quantity) {
    console.log(newQuantity);
    const productUpdate = await Product.findOneAndUpdate(
      { _id: isExist._id },
      { "inventory.quantity": newQuantity },
      { new: true }
    );
    console.log(productUpdate);
  }

  if (isExist.inventory.quantity === data.quantity) {
    console.log(newQuantity);
    const productUpdate = await Product.findOneAndUpdate(
      { _id: isExist._id },
      { "inventory.quantity": newQuantity, "inventory.inStock": false },
      { new: true }
    );
    console.log(productUpdate);
  }

  const result = await Order.create(data);
  return result;
};

const getAllFromDB = async (email: any) => {
  if (email) {
    const result = Order.find({
      email: email,
    });
    return result;
  }

  const result = await Order.find();
  return result;
};
const getAllFromDBById = async (id: String) => {
  const result = await Order.findOne({ _id: id });
  return result;
};

const deleteFromDBById = async (id: String) => {
  console.log(id);
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
  getAllFromDBById,
  deleteFromDBById,
};
