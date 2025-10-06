import { ClaseBaseEntity } from "src/common/claseBase.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('rol')
export class Rol extends ClaseBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;

    @OneToMany(() => User, (user) => user.rol)
    users: User[];
}
