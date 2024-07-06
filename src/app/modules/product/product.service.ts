import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const insertIntoDB = async (data: IProduct) => {
  const result = await Product.create(data);
  return result;
};

export const ProductService = {
  insertIntoDB,
};
