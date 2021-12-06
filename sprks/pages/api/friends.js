import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

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


