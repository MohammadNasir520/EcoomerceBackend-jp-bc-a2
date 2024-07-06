import { Request, Response } from "express";
import { ProductService } from "./product.service";

const insertIntoDB = async (req: Request, res: Response) => {
  const result = await ProductService.insertIntoDB(req.body);
  res.send({
    success: true,
    message: "Product created successfully",
    data: result,
  });
};

export const ProductController = {
  insertIntoDB,
};
