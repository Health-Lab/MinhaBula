import express from "express";

//import of the controllers
import { getMedicineByName, insert } from "../controllers/medicineController";

const router = express.Router();

//DESCOMENTAR A ROTA CASO VA INSERIR MAIS ALGUM MEDICAMENTO
//router.get("/insert", insert );
router.get("/:medicine", getMedicineByName);


export  { router };