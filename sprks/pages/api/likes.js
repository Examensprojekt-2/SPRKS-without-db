import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLikes() {
    const likes = await prisma.likes.findMany();
    console.log("All likes", likes);
    return likes;
}

export async function getLikesByGameId() {
    const likes = await prisma.likes.findMany({
        where: { gameId: 2}
    });
    console.log("Likes for specific game", likes)
    return likes;
}
