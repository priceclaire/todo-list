import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/auth/auth.controller';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async findUserByUsername(username: string) {
        return await this.usersRepository.findBy({ username });
    }

    async findUserByEmail(email: string) {
        return await this.usersRepository.findBy({ email });
    }

    async createUser(user: SignUpDto) {
        console.log("USER", user);
        return await this.usersRepository.save(user);
    }
}
