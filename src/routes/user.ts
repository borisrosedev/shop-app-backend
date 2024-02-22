import express from 'express';
import { UserController } from '../controllers/user.ts';
const router = express.Router();

router.post('/login', UserController.login);
router.post('/', UserController.store);
router.get('/', UserController.index);

export default router