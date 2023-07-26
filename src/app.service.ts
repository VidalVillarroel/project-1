import { Injectable } from '@nestjs/common';
import { UserModel } from './models/User.entity';
import { injectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello mundo!';
  }
}
