import { Request, Response } from "express";
import { CategoryService } from "./category.service";

export class CategoryController {
      private service = new CategoryService();

      getAll = async (req: Request, res: Response) => {
            const categories = await this.service.findAll();
            res.json(categories);
      };

      getById = async (req: Request, res: Response) => {
            const category = await this.service.findById(Number(req.params.id));
            if (!category) return res.status(404).json({ message: "Category not found" });
            res.json(category);
      };

      create = async (req: Request, res: Response) => {
            const category = await this.service.create(req.body);
            res.status(201).json(category);
      };

      delete = async (req: Request, res: Response) => {
            await this.service.delete(Number(req.params.id));
            res.status(204).send();
      };
}
