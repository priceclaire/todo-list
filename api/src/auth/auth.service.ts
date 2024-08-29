import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async hashPassword(password: string) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    async signUp(signUpDto) {
        const hashedPassword = await this.hashPassword(signUpDto.password);
        console.log('HASHED PASSWORD', hashedPassword);
        signUpDto.password = hashedPassword;
        this.userService.createUser(signUpDto);
        return "fake token 2";
    }
}
