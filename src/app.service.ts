import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, je suis frederic';
  }

  getUserName(): string {
    return 'frederic ignace';
  }
}
