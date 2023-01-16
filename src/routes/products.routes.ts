import { Router } from "express";
import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { ListProductController } from "../modules/products/useCases/listProduct/ListProductController";

export const productsRoutes = Router()

const createProductController = new CreateProductController()
const listProductController = new ListProductController()

productsRoutes.post("/create", createProductController.handle)
productsRoutes.get("/list", listProductController.handle)