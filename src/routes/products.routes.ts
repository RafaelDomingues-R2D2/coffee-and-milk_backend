import { Router } from "express";
import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";

export const productsRoutes = Router()

const createProductController = new CreateProductController()

productsRoutes.post("/create", createProductController.handle)