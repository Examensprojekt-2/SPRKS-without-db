import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLike(id, gameid) {
    const gameLikes = await prisma.$queryRaw(Prisma.sql`Select * from Likes WHERE userId=${id} AND gameId=${gameid}`)
    return gameLikes
}


