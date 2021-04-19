import express from 'express';
import cors from 'cors';
import { userController, itemController } from '../controllers'
import authenticateToken from '../middlewares/authenticateToken';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

router.use(authenticateToken);

router.post('/item', itemController.createItem);
router.get('/item', itemController.getItems);
router.put('/item', itemController.buyItem);

export default router;
