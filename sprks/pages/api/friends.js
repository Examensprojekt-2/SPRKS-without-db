import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// export async function getFriendsId() {
//     const friends = await prisma.friends.friendId.findUnique({
//         where: { userId: 1}
//     });
//     // console.log("Likes for specific game", friends)
//     return friends;
// }

// export async function getFriends() {
//     const friends = await prisma.users.findMany({
//         where: { Id: getFriends()}
//     });
//     // console.log("Likes for specific game", friends)
//     return friends;
// }

export async function getFriends() {
  const friends = await prisma.friends.findMany({
    where: { userId: 1 },
  });
  // console.log("Likes for specific game", friends)
  return friends;
}
