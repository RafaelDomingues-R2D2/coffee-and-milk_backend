import { Router } from "express";

import { CreateOrderController } from "../modules/orders/useCases/createOrder/CreateOrderController";

export const ordersRoutes = Router()

const createOrderController = new CreateOrderController()

ordersRoutes.post("/create", createOrderController.handle)