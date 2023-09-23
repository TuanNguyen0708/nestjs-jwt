import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../role/role.enum";
import { UserEntity } from "./user.entity";

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'varchar', length: 10, nullable: false, unique: true})
  roleName: RoleEnum;

  @OneToMany(() => UserEntity, user => user.role)
  users: UserEntity[];
}