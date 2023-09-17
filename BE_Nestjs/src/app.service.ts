import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(data: any): Promise<UserEntity> {
    return this.userRepository.save(data);
  }

  async findOne(credential: any): Promise<UserEntity> {
    const options: FindOneOptions<UserEntity> = {
      where: credential ,
    };
    return this.userRepository.findOne(options);
  }
}
