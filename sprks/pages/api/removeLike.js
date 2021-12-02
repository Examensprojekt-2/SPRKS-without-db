import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
    const data = req.body;
    try {
        const removed = await prisma.likes.deleteMany({
            where: {
                gameId: req.body.gameId,
                userId: req.body.userId
            }
            
        })
        res.status(200).json(removed);
    }
    catch (err) {
        console.log(err)
    }
}

// export default async (req, res) => {
//     const data = req.body;
//     try {
//         const result = await prisma.likes.create({
//             data: {
//                 ...data,
//             },
//         });
//         res.status(200).json(result);
//     } catch (err) {
//         if (err instanceof Prisma.PrismaClientKnownRequestError) {
//             if (err.code === 'P2002') {
//                 console.log('There is a unqiue constraint violation, this user has already liked this game.')
//                 // Delete like where gameId and userId the same as in the request
//                 const removeLike = await prisma.likes.deleteMany({
//                     where: { 
//                         gameId: req.body.gameId,
//                         userId: req.body.userId
//                     }
//                 })
//             }
//         }
//     }
    
// };