import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LogInDto, SignUpDto } from './auth.controller';

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
        return this.jwtService.sign(payload, { secret: process.env.JWT_SECRET });
    }

    async signUp(signUpDto: SignUpDto) {
        const usernameExists = (await this.userService.findUserByUsername(signUpDto.username)).length > 0;

        const emailExists = (await this.userService.findUserByEmail(signUpDto.email)).length > 0;

        if (usernameExists) {
            throw new BadRequestException('Username already exists');
        }

        if (emailExists) {
            throw new BadRequestException('Email already exists');
        }

        const hashedPassword = await this.hashPassword(signUpDto.password);
        signUpDto.password = hashedPassword;

        const user = await this.userService.createUser(signUpDto);

        return await this.createAccessToken(user);
    }

    async logIn(logInDto: LogInDto) {
        console.log('LOG IN DTO', logInDto);
        return 'fake-token';
    }
}
