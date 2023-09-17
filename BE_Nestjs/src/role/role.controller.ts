import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDTO } from './dto/role.dto';
import { RoleEntity } from "../entities/role.entity";

@Controller('api/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  getAll(): Promise<RoleEntity[]> {
    return this.roleService.getAll();
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  create(@Body() dto: RoleDTO) {
    return this.roleService.create(dto);
  }
}
