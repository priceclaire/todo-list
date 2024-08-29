import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    signUp(signUpDto) {
        console.log('SIGN UP DATA', signUpDto);
        return "fake token 2";
    }
}
