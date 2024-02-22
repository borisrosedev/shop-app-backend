import prisma from "../db/connect.ts"


export class ProductController {


    static async index(req: any, res:any, next:any) {
        const allProducts = await prisma.product.findMany()
        if (allProducts) {
            return res.status(200).json(allProducts)
        }
        next()

    }

  

    static async store(req: any, res:any, next:any) {
        const { title, price, url, description, ownerId  } = req.body

        if (!title || !price ||!url || !description ||!ownerId) {
            res.code = 400
            next()
            return;
        }

    
        const newProduct = await prisma.product.create({
            data: {
                title,
                description,
                url,
                price,
                owner: ownerId
            }
        })

        return res.status(201).json(newProduct)
    }

    static async delete(req: any, res:any, next:any){
        const deletedProduct = await prisma.product.delete({
            where: { id: req.params.id },
        })
    }


}