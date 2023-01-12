import { container } from "tsyringe"

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"

import { IProductsRepository } from "../../modules/products/repositores/IProductsRepository"
import { ProductsRepository } from "../../modules/products/repositores/implementations/ProductsRepository"

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
)