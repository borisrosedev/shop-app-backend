import express from 'express';
import { CommentController } from '../controllers/comment.ts';
const router = express.Router();

router.post('/:id', CommentController.delete);
router.post('/', CommentController.store);
router.get('/', CommentController.index);

export default router