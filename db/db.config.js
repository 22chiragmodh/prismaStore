import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

//  writing queries to read and write data in your database
export default prisma;
