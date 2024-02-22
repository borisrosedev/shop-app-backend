import express from 'express';
import { ProductController } from '../controllers/product.ts';
const router = express.Router();

router.delete('/:id', ProductController.delete);
router.post('/', ProductController.store);
router.get('/', ProductController.index);

export default router