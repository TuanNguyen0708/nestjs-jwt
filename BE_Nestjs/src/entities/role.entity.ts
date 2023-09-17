import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleEnum } from "../role/role.enum";

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'varchar', length: 10, nullable: false, unique: true})
  role: RoleEnum;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  users: UserEntity[];
}
