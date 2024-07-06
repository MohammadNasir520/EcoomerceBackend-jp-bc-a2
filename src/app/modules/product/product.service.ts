import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const insertIntoDB = async (data: IProduct) => {
  const result = await Product.create(data);
  return result;
};

const getAllFromDB = async (searchTerm: any) => {
  if (searchTerm) {
    const result = Product.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    return result;
  }

  const result = await Product.find();
  return result;
};
const getAllFromDBById = async (id: String) => {
  const result = await Product.findOne({ _id: id });
  return result;
};
const updateFromDBById = async (id: String, data: Partial<IProduct>) => {
  const result = await Product.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};
const deleteFromDBById = async (id: String) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
const searchBySearchTerm = async (id: String) => {
  const result = await Product.find(id);
  return result;
};
export const ProductService = {
  insertIntoDB,
  getAllFromDB,
  getAllFromDBById,
  updateFromDBById,
  deleteFromDBById,
  searchBySearchTerm,
};
