import { User } from "@prisma/client";
import prisma from "../../config/prismaClient";

export class UserService {
      async findAll(): Promise<User[]> {
            return prisma.user.findMany({
                  include: { Post: true },
            });
      }

      async findById(id: number): Promise<User | null> {
            return prisma.user.findUnique({
                  where: { id },
            });
      }

      async create(data: { name: string; email: string }): Promise<User> {
            return prisma.user.create({ data });
      }

      async delete(id: number): Promise<User> {
            const user = prisma.user.delete({ where: { id } });
            return user;
      }
}
