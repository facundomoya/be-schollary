import { InstitucionModulo } from './institucion_modulo.entity';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('institucion')
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => InstitucionModulo, InstitucionModulo => InstitucionModulo.institucion)
    institucionModulo: InstitucionModulo[];

    @OneToMany(() => Alumno, alumno => alumno.institucion)
    alumnos: Alumno[];

};
