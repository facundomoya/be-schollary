import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Institucion } from '../../institucion/entities/institucion.entity';
import { Materia } from '../../materia/entities/materia.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
@Entity('user')
export class User extends ClaseBaseEntity {
    @Column()
    user_name: string;

    @Column()
    password: string;

    @OneToOne(() => Institucion)
    @JoinColumn()
    institucion: Institucion;

    @OneToMany(() => Materia, (materia) => materia.user)
    materias: Materia[];
};