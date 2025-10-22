import { Post } from "@prisma/client";
import prisma from "../../config/prismaClient";
import { CategoryService } from "../category/category.service";
import { UserService } from "../user/user.service";

export class PostService {
      private category = new CategoryService();
      private user = new UserService();

      async findAll(): Promise<Post[]> {
            return prisma.post.findMany({ include: { author: true, Category: true } });
      }

      async findById(id: number): Promise<Post | null> {
            return prisma.post.findUnique({ where: { id }, include: { author: true, Category: true } });
      }

      async create(data: {
            title: string;
            content?: string;
            authorId: number;
            categoryId: number;
            type?: "TEXT" | "VIDEO" | "IMAGE";
      }): Promise<Post> {
            console.log({ data })
            const isValidAuthor = await this.user.findById(data.authorId);
            if (!isValidAuthor) {
                  throw new Error("Invalid authorId");
            }

            const isValidCategory = await this.category.findById(data.categoryId);
            if (!isValidCategory) {
                  throw new Error("Invalid categoryId");
            }

            return prisma.post.create({ data });
      }

      async update(id: number, data: Partial<Post>): Promise<Post> {
            return prisma.post.update({ where: { id }, data });
      }

      async delete(id: number): Promise<Post> {
            return prisma.post.delete({ where: { id } });
      }
}
