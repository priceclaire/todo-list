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

    async findUserById(id: number) {
        return await this.usersRepository.findOneBy({ id });
    }

    async findUserByUsername(username: string) {
        return await this.usersRepository.findOneBy({ username });
    }

    async findUserByEmail(email: string) {
        return await this.usersRepository.findOneBy({ email });
    }

    async createUser(user: SignUpDto) {
        return await this.usersRepository.save(user);
    }
}
