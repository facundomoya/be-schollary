import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { Evaluacion } from 'src/evaluacion/entities/evaluacion.entity';

@Entity('alumno')
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string
    @Column()
    apellido: string
    @Column()
    edad: number

}
