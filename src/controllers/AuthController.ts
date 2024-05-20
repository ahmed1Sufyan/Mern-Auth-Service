import { Request, Response } from 'express';
// import { AppDataSource } from '../config/data-source';
// import { User } from '../entity/User';
import { UserService } from '../services/UserService';

export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
interface RegisterUserRequest extends Request {
    body: UserData;
}
export class AuthController {
    constructor(private userService: UserService) {}
    async register(req: RegisterUserRequest, res: Response) {
        const { firstName, lastName, email, password } = req.body;
        await this.userService.create({ firstName, lastName, email, password });
        res.status(201).json();
    }
}
