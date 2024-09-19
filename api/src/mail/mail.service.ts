import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { sendMail } from './mail';
import { resetPasswordTemplate } from './reset-password-template';

@Injectable()
export class MailService {
  async sendPasswordResetEmail(user: User, token: string) {
    sendMail(
      {
        from: 'price-claire@outlook.com',
        to: user.email,
        subject: 'Project Planning Tool: Reset your password',
        html: resetPasswordTemplate(token, user.id),
      },
      () => {
        console.log('Password email reset sent');
      },
    );
  }
}
