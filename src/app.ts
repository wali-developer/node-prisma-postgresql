import express from "express";
import userRoutes from "./modules/user/user.routes";
import postRoutes from "./modules/post/post.routes";
import categoryRoutes from "./modules/category/category.routes";

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/posts", postRoutes);

export default app;
