import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Name } from './name.entity';
import { User } from './users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private namesRepository: Repository<User>,
  ) {}

  async addUser(name: string, email: string, username: string, password: string) {
    await this.namesRepository.save({ 
      name: name, 
      email: email, 
      username: username,
      password: password
    });
    return await this.getUser();
  }

  async getUser() {
    return await this.namesRepository.find();
  }
}
