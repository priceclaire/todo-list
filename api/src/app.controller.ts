import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/name')
  async addUser(
    @Body('name') name: string, 
    @Body('email') email: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    console.log(name, email, username, password);
    return await this.appService.addUser(name, email, username, password);
  }

  @Get()
  async getUser() {
    return await this.appService.getUser();
  }
}
