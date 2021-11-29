import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLikes() {
  const likes = await prisma.likes.findMany();
  return likes;
}

export async function getLikesByGameId(id) {
  const likes = await prisma.likes.findMany({
    where: { gameId: id },
  });
  return likes;
}
