import { Injectable } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class MailService {
  async sendPasswordResetEmail(user: User, token: string) {
    console.log('User: ', user);
    console.log('Token: ', token);
    return 'HI';
    }
}