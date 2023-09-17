import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column({unique: true})
  email: string

  @Column()
  password: string
}