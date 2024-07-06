import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const insertIntoDB = async (data: IProduct) => {
  const result = await Product.create(data);
  return result;
};

const getAllFromDB = async () => {
  const result = await Product.find();
  return result;
};
export const ProductService = {
  insertIntoDB,
  getAllFromDB,
};
