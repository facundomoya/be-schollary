import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { InstitucionModulo } from './institucion_modulo.entity';
import { Alumno } from '../../alumno/entities/alumno.entity';
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
