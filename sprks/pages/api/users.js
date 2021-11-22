import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUsers() {
  const userProps = await prisma.users.findMany();
  console.log(userProps);
  return userProps;
}

export async function getGames() {
  const Game = await prisma.game.findMany();
  console.log(Game);
  return Game;
}

export async function getUserById(idProps) {
  console.log('idprops:' + idProps);
  const userProps = await prisma.users.findMany({
    where: {
      Id: idProps,
    },
  });

  return userProps;
}
