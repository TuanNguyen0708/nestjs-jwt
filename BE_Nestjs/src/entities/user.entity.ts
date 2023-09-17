import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'varchar', length: 10, nullable: true})
  name: string;

  @Column({type: 'varchar', length: 10, nullable: false, unique: true})
  email: string;

  @Column({type: 'varchar', nullable: false})
  password: string;

  @ManyToMany(() => RoleEntity, (role) => role.users, {eager: true})
  @JoinTable({
    name: 'user_role',
    joinColumn: {
      name: 'user_id',
    },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: RoleEntity[];
}
