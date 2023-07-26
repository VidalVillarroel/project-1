import { Injectable } from '@nestjs/common';
import { UserModel } from './models/User.entity';
import { injectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserModel)
    private user: Repository<UserModel>
  ){}

  public index() {
    return this.user.find();
  }

  findOne(id: number): Promise<UserModel | null> {
    return this.user.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.user.delete(id);
  }

}