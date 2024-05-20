import { Repository } from 'typeorm';
// import { AppDataSource } from '../config/data-source';
import { UserData } from '../controllers/AuthController';

import { User } from '../entity/User';

export class UserService {
    constructor(private repository: Repository<User>) {}
    async create({ firstName, lastName, email, password }: UserData) {
        await this.repository.save({
            firstName,
            lastName,
            email,
            password,
        });
    }
}
