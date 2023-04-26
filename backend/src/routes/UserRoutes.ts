import express from "express";

//import of the controllers
import { singUP, login, getUserById } from "../controllers/userController";

//import middlewares
import { userSingpUpValidation, userLoginValidation } from "../middlewares/userMiddleware";
import { validate } from "../middlewares/validateMiddleware";

const router = express.Router();

router.post("/singup", userSingpUpValidation(), validate, singUP);
router.post("/login", userLoginValidation(), validate, login);
router.get("/:id", getUserById);

export { router };