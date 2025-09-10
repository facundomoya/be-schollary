import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Modulo } from 'src/modulo/entities/modulo.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Entity('institucion')
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToOne(() => User, (user) => user.institucion, { cascade: true })
    user: User;

    @ManyToMany(() => Modulo, (modulo) => modulo.instituciones)
    @JoinTable({ name: 'institucion_modulo' }) // tabla puente
    modulos: Modulo[];

    @OneToMany(() => Alumno, (alumno) => alumno.institucion)
    alumnos: Alumno[];
};
