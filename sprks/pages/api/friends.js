import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// export async function getFriendsId() {
//   const friends = await prisma.friends.friendId.findUnique({
//     where: { userId: 1 },
//   });
//   // console.log("Likes for specific game", friends)
//   return friends;
// }

// export async function getFriends() {
//   const friends = await prisma.users.findMany({
//     where: { Id: getFriends() },
//   });
//   // console.log("Likes for specific game", friends)
//   return friends;
// }

export async function getUserById(idProps) {
  const userProps = await prisma.users.findMany({
    where: {
      Id: idProps,
    },
  });

  return userProps;
}

export async function getFriends(id) {
  const friends = await prisma.$queryRaw(Prisma.sql`SELECT * FROM Users INNER JOIN Friends 
  on friends.userId = Users.Id WHERE friends.friendId = ${id}`)
  return friends
  }

  // let newFriendList = [];

  // for (let i = 0; i < friends.length; i++) {
  //   const friend = friends[i];

  //   function getUserName(id) {
  //     switch (id) {
  //       case 1:
  //         return 'Marcus';
  //       case 2:
  //         return 'Oscar';
  //       case 3:
  //         return 'Anders';
  //       case 4:
  //         return 'Filip';
  //       case 5:
  //         return 'Jacob';
  //       case 6:
  //         return 'Adam';
  //       case 7:
  //         return 'Erik';
  //     }
  //   }

  //   let userName = getUserName(friend.friendId);

  //   let friendObj = {
  //     userId: friend.userId,
  //     friendId: friend.friendId,
  //     friendName: userName,
  //   };
  //   newFriendList.push(friendObj);
  // }