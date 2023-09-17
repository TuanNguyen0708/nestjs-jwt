import { RoleEnum } from "../role.enum";
import { IsEnum } from "class-validator";

export class RoleDTO {

  @IsEnum(RoleEnum, { message: 'Role can user or admin' })
  role: RoleEnum;
}