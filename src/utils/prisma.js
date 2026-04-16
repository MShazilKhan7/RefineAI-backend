const { PrismaClient } = require("../generated/prisma/client");
require('dotenv').config();


const prismaClientSingleton = () => {
  return new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL , // <-- Your Prisma Accelerate URL here
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
};

// Singleton to prevent multiple clients in dev
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma;
