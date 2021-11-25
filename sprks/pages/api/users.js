import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUsers() {
  const userProps = await prisma.users.findMany();
  return userProps;
}

export async function getGames() {
  const Game = await prisma.game.findMany();
  return Game;
}

export async function getUserById(idProps) {
  const userProps = await prisma.users.findMany({
    where: {
      Id: idProps,
    },
  });

  return userProps;
}
