import prisma from "../db/connect.ts";
import bcrypt from "bcrypt";


export class UserController {


    static async index(req: any, res:any, next:any) {
        const allUsers = await prisma.user.findMany()
        if (allUsers) {
            return res.status(200).json(allUsers)
        }
        next()

    }

    static async login(req: any, res:any, next:any) {

        const { email, password } = req.body

        if (!email || !password) {
            res.code = 400
            next()
            return
        }

        const oldUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!oldUser) {
            res.code = 400
            next();
            return
        }

        bcrypt.compare(password, oldUser.password).then(function (result: boolean) {
            if (result == true) {
                return res.status(200).json(oldUser)
            }
        });



    }

    static async store(req: any, res:any, next:any) {
        const { email, password } = req.body

        if (!email || !password) {
            res.code = 400
            next()
            return;
        }

        const oldUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (oldUser) {
            res.code = 400
            next();
            return
        }

        const hash = bcrypt.hashSync(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hash
            }
        })

        return res.status(201).json(newUser)
    }

    static async delete(req: any, res:any, next:any){
        const deletedUser = await prisma.user.delete({
            where: { id: req.params.id },
        })
    }


}