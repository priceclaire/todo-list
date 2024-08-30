import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ) {}

    async hashPassword(password: string) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    async createAccessToken(user) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async signUp(signUpDto) {
        const hashedPassword = await this.hashPassword(signUpDto.password);
        signUpDto.password = hashedPassword;

        const user = await this.userService.createUser(signUpDto);
        console.log('USER', user);

        return await this.createAccessToken(user);
    }
}
