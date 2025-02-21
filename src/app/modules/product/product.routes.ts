import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.post("/", ProductController.insertIntoDB);
router.get("/", ProductController.getAllFromDB);
router.get("/:id", ProductController.getAllFromDBById);

router.put("/:id", ProductController.updateFromDBById);
router.delete("/:id", ProductController.deleteFromDBById);

export const ProductRoutes = router;
