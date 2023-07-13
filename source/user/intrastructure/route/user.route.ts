import { Router } from "express";
import { MongoRepository } from "../repository/mongo.repository";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.ctrl";

const route = Router();

// Iniciar Repositorio
const userMongoRepository = new MongoRepository();

// Iniciar casos de uso
const userUseCase = new UserUseCase(userMongoRepository);

// Iniciar user controller
const userController = new UserController(userUseCase);

// Definir rutas
route.post("/user", userController.insertController);
route.get("/user", userController.getController);

export default route;