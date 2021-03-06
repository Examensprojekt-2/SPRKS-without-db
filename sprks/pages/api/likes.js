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
  const mostLiked = await prisma.$queryRaw(Prisma.sql`SELECT top 5 Game.name, Game.genre, Game.Image, Game.Description, Likes.gameId, COUNT(Game.Id) AS 'Likes'

  FROM Likes INNER JOIN Game on Game.Id = Likes.gameId
  
  GROUP BY Game.Id, Game.name, Likes.gameId, Game.Image, Game.Description, Game.genre
  
  ORDER BY [Likes] DESC`)
  

  return mostLiked;
  }

  export async function getFriendsLikes(id) {
    const likedByFriends = await prisma.$queryRaw(Prisma.sql`SELECT Game.name, Game.genre, Game.Image, Game.Description, Likes.gameId, COUNT(Game.Id) AS 'Likes'

    FROM Game INNER JOIN Likes on Game.Id = Likes.gameId
    
    INNER JOIN Friends on Likes.userId = Friends.userId
    
    INNER JOIN Users on Friends.friendId = Users.Id
    
    WHERE Users.Id = ${id}
    
    GROUP BY Game.name, Likes.gameId, Game.Image, Game.Description, Game.genre
    
    ` )
    
    return likedByFriends;
    }
  
    