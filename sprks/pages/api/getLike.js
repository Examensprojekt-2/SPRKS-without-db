import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLike(id, gameid) {
    const gameLikes = await prisma.$queryRaw(Prisma.sql`Select * from Likes WHERE userId=${id} AND gameId=${gameid}`)
    return gameLikes
}

// export async function getFriends(id) {
//     const friends = await prisma.$queryRaw(Prisma.sql`SELECT name FROM Users INNER JOIN Friends 
//     on friends.userId = Users.Id WHERE friends.friendId = ${id}`)
//     return friends
//     }





// export async function getUsers() {
//   const userProps = await prisma.users.findMany();
//   return userProps;
// }


