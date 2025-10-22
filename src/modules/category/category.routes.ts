import { Router } from "express";
import { CategoryController } from "./category.controller";

const router = Router();
const controller = new CategoryController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.delete("/:id", controller.delete);

export default router;
