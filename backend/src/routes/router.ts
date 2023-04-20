import express from "express";

const router = express();

//user Routes
import { router as userRouter } from "./UserRoutes";
router.use("/api/auth", userRouter);

//medicine Routes
import { router as medicineRouter } from "./MedicineRoutes";
router.use("/api/medicine", medicineRouter);

export default router;
