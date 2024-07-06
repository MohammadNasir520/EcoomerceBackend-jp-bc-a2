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

const getAllFromDB = async (req: Request, res: Response) => {
  try {
    const searchData = req.query.searchTerm;

    const result = await ProductService.getAllFromDB(searchData);
    if (!result) {
      res.send({
        success: false,
        message: "Products not found",
      });
    }
    res.send({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.errors[0].message,
    });
  }
};
const getAllFromDBById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await ProductService.getAllFromDBById(id);
    if (!result) {
      res.send({
        success: false,
        message: "Product not found",
      });
    }
    res.send({
      success: true,
      message: "Product retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.errors[0].message,
    });
  }
};
const updateFromDBById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const zodParsedData = ProductValidation.updateSchema.parse(data);
    const result = await ProductService.updateFromDBById(id, zodParsedData);
    if (!result) {
      res.send({
        success: false,
        message: "Product not found",
      });
    }
    res.send({
      success: true,
      message: "Product updated successfully",
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
const deleteFromDBById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await ProductService.deleteFromDBById(id);
    if (!result) {
      res.send({
        success: false,
        message: "Product not found",
      });
    }
    res.send({
      success: true,
      message: "Product delete successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.errors[0].message,
    });
  }
};
const searchBySearchTerm = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await ProductService.searchBySearchTerm(id);
    if (!result) {
      res.send({
        success: false,
        message: "Product not found",
      });
    }
    res.send({
      success: true,
      message: "Product delete successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.errors[0].message,
    });
  }
};

export const ProductController = {
  insertIntoDB,
  getAllFromDB,
  getAllFromDBById,
  updateFromDBById,
  deleteFromDBById,
};
