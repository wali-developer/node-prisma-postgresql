import { Request, Response } from "express";
import { PostService } from "./post.service";
import { CategoryService } from "../category/category.service";
import { UserService } from "../user/user.service";

export class PostController {
      private service = new PostService();
      private category = new CategoryService();
      private user = new UserService();

      getAll = async (req: Request, res: Response) => {
            const posts = await this.service.findAll();
            res.json(posts);
      };

      getById = async (req: Request, res: Response) => {
            const post = await this.service.findById(Number(req.params.id));
            if (!post) return res.status(404).json({ message: "Post not found" });
            res.json(post);
      };

      create = async (req: Request, res: Response) => {
            try {
                  const post = await this.service.create(req.body);
                  res.status(201).json(post);
            } catch (error: any) {
                  console.error(error);
                  res.status(500).json({ message: error?.message || "Internal server error" });
            }
      };

      update = async (req: Request, res: Response) => {
            const post = await this.service.update(Number(req.params.id), req.body);
            res.json(post);
      };

      delete = async (req: Request, res: Response) => {
            await this.service.delete(Number(req.params.id));
            res.status(204).send('Post deleted...');
      };
}
