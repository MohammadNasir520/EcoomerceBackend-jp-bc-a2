import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.post("/", ProductController.insertIntoDB);
router.get("/", ProductController.getAllFromDB);

export const ProductRoutes = router;
