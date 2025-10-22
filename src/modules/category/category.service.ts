import { Category } from "@prisma/client";
import prisma from "../../config/prismaClient";

export class CategoryService {
      async findAll(): Promise<Category[]> {
            return prisma.category.findMany();
      }

      async findById(id: number): Promise<Category | null> {
            return prisma.category.findUnique({ where: { id }, include: { Post: true } });
      }

      async create(data: { name: string }): Promise<Category> {
            return prisma.category.create({ data });
      }

      async delete(id: number): Promise<Category> {
            return prisma.category.delete({ where: { id } });
      }
}
