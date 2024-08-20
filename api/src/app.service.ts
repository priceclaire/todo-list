import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async addName(name: string) {
    console.log('NAME:', name);
    return { name };
  }

  async getNames() {
    return {};
  }
}
