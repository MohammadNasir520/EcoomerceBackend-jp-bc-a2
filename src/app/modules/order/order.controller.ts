import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { OrderValidation } from "./order.validation";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const zodParsedData = OrderValidation.createSchema.parse(req.body);

    const result: any = await OrderService.insertIntoDB(zodParsedData);
    if (result?.founded === false) {
      res.send({
        success: false,
        message: result.message,
        data: null,
      });
    } else {
      res.send({
        success: true,
        message: "Order created successfully",
        data: result,
      });
    }
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
    const email = req.query.email;

    const result = await OrderService.getAllFromDB(email);
    if (!result.length) {
      res.send({
        success: false,
        message: "Orders not found",
      });
    } else {
      res.send({
        success: true,
        message: "Orders retrieved successfully",
        data: result,
      });
    }
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
    const result = await OrderService.getAllFromDBById(id);
    if (!result) {
      res.send({
        success: false,
        message: "Order not found",
      });
    }
    res.send({
      success: true,
      message: "Order retrieved successfully",
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
    const zodParsedData = OrderValidation.updateSchema.parse(data);
    const result = await OrderService.updateFromDBById(id, zodParsedData);
    if (!result) {
      res.send({
        success: false,
        message: "Order not found",
      });
    }
    res.send({
      success: true,
      message: "Order updated successfully",
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
    const result = await OrderService.deleteFromDBById(id);
    if (!result) {
      res.send({
        success: false,
        message: "Order not found",
      });
    }
    res.send({
      success: true,
      message: "Order delete successfully",
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
    const result = await OrderService.searchBySearchTerm(id);
    if (!result) {
      res.send({
        success: false,
        message: "Order not found",
      });
    }
    res.send({
      success: true,
      message: "Order delete successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.errors[0].message,
    });
  }
};

export const OrderController = {
  insertIntoDB,
  getAllFromDB,
  getAllFromDBById,
  updateFromDBById,
  deleteFromDBById,
};
