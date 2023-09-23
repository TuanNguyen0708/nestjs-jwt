import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async register(data: any): Promise<UserEntity> {
    const role = await this.roleRepository.findOne({
      where: { roleName: data.roleName },
    });
    if (!role) {
      throw new Error(`Role ${data.roleName} not found.`);
    }
    if (role.roleName === 'admin') {
      throw new Error(`You don't have permission`);
    }
    const user: UserEntity = this.userRepository.create({
      email: data.email,
      password: data.password,
      name: data.name,
      role,
    });
    return this.userRepository.save(user);
  }

  async findOne(credential: any): Promise<UserEntity> {
    const options: FindOneOptions<UserEntity> = {
      where: credential,
    };
    return this.userRepository.findOne(options);
  }
}
