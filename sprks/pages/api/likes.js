import { PrismaClient, Prisma } from '@prisma/client';
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

export async function getMostLikedGames() {
  const mostLiked = await prisma.$queryRaw(Prisma.sql`SELECT top 3 Game.name, Likes.gameId, COUNT(Game.Id) AS count 
  FROM Likes INNER JOIN Game on Game.Id = Likes.gameId
  
  GROUP BY Game.name, Likes.gameId
  
  ORDER BY [count] DESC`)
  

  return mostLiked;
  }

  