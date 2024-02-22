import prisma from "../db/connect.ts"

export class CommentController {


    static async index(req: any, res: any, next: any) {
        const allComments = await prisma.comment.findMany()
        if (allComments) {
            return res.status(200).json(allComments)
        }
        next()

    }


    static async store(req: any, res: any, next: any) {
        const { content, productId } = req.body

        if (!content || !productId) {
            res.code = 400
            next()
            return;
        }


        const newComment = await prisma.comment.create({
            data: {
                content,
                productId
            }
        })

        return res.status(201).json(newComment)
    }

    static async delete(req: any, res: any, next: any) {
        const deletedComment = await prisma.comment.delete({
            where: { id: req.params.id },
        })
    }


}