import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';
import { RoleDTO } from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async getAll(): Promise<RoleEntity[]> {
    const roles = await this.roleRepository.find();
    if (!roles.length) {
      throw new NotFoundException({ message: 'No find role' });
    }
    return roles;
  }

  async create(dto: RoleDTO): Promise<any> {
    const exists = await this.roleRepository.findOne({
      where: { roleName: dto.roleName },
    });
    if (exists) {
      throw new BadRequestException({ message: 'Role does not exist' });
    }
    return await this.roleRepository.save(dto as RoleEntity);
  }
}
