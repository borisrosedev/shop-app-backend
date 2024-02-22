import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.ts';
import commentRoutes from './routes/comment.ts';
import productRoutes from './routes/product.ts';
import bodyParser from 'body-parser';
import { ErrorHandlers } from './middlewares/errorHandlers.ts';
dotenv.config();

const app = express()
app.set('port', process.env.PORT)
app.set('host', process.env.HOST)
app.use(cors(), bodyParser.json(), bodyParser.urlencoded({ extended: true }), express.json())

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/comments', commentRoutes)
app.use(ErrorHandlers.badRequest, ErrorHandlers.notFound, ErrorHandlers.forbidden)

app.listen(app.get('port'), () => {
    console.log(`Server is ready at ${app.get('host')} : ${app.get('port')}`)
})
