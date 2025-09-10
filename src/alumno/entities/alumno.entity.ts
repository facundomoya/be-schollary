import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Institucion } from 'src/institucion/entities/institucion.entity';

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

    @ManyToOne(() => Institucion, (institucion) => institucion.alumnos)
    @JoinColumn({name : 'institucionId'})
    institucion: Institucion;

}
