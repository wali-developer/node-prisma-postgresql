import { Router } from "express";
import { PostController } from "./post.controller";

const router = Router();
const controller = new PostController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
