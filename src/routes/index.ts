import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes"

import { ordersRoutes } from "./orders.routes"

import { productsRoutes } from "./products.routes"
import { usersRoutes } from "./users.routes"

export const router = Router()

router.use("/users", usersRoutes)
router.use(authenticateRoutes)
router.use("/products", productsRoutes)
router.use("/orders", ordersRoutes)