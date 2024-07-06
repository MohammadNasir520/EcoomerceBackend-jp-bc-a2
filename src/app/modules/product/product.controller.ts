import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ProductValidation } from "./product.validation";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    console.log("hello");
    const zodParsedData = ProductValidation.createSchema.parse(req.body);
    console.log(zodParsedData);

    const result = await ProductService.insertIntoDB(zodParsedData);
    res.send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      success: false,
      path: error.errors[0].path[0],
      message: error.errors[0].message,
    });
  }
};

export const ProductController = {
  insertIntoDB,
};
