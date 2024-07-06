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
const getAllFromDBById = async (id: String) => {
  const result = await Product.findOne({ _id: id });
  return result;
};
export const ProductService = {
  insertIntoDB,
  getAllFromDB,
  getAllFromDBById,
};
