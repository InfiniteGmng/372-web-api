import express from "express";
import {
  addProd,
  getById,
  getProd,
  updateProd,
  delProd,
} from "./../controllers/productsController.js";

const productRouter = express.Router();

//routes
productRouter.post("/", addProd);
productRouter.get("/:id", getById);
productRouter.get("/", getProd);
productRouter.patch("/:id", updateProd);
productRouter.delete("/", delProd);

export default productRouter;
