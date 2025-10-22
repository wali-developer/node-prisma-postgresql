import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
      private userService: UserService;

      constructor() {
            this.userService = new UserService();
      }

      getAll = async (req: Request, res: Response) => {
            const users = await this.userService.findAll();
            res.json(users);
      };

      getById = async (req: Request, res: Response) => {
            const user = await this.userService.findById(Number(req.params.id));
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json(user);
      };

      create = async (req: Request, res: Response) => {
            try {
                  const user = await this.userService.create(req.body);
                  res.status(201).json(user);
            } catch (error: any) {
                  console.error(error);
                  res.status(500).json({ message: error.message || "Internal server error" });
            }
      };

      delete = async (req: Request, res: Response) => {
            try {
                  const user = await this.userService.delete(Number(req.params.id));
                  res.status(204).json({
                        message: "User deleted successfully",
                        user,
                  });

            } catch (error: any) {
                  console.error(error);
                  res.status(500).json({ message: error.message || "Error deleting user" });
            }
      };
}
