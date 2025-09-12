import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { EvaluacionAlumno } from './evaluacion_alumno.entity';
import { Asistencia } from '../../asistencia/entities/asistencia.entity';
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
    institucion: Institucion;

    @OneToMany(() => EvaluacionAlumno, evaluacionAlumno => evaluacionAlumno.alumnos)
    evaluaciones: EvaluacionAlumno[];

    @OneToMany(() => Asistencia, (asistencia) => asistencia.alumno)
    asistencias: Asistencia[];

}
