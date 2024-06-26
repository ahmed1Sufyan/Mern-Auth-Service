import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { UserService } from '../services/UserService';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/User';

const router = Router();
const respository = AppDataSource.getRepository(User);
const userService = new UserService(respository);
const authController = new AuthController(userService);
router.post('/register', (req, res) => {
    void authController.register(req, res);
});

export default router;
