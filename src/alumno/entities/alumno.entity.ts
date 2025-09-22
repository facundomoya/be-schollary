import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { Asistencia } from '../../asistencia/entities/asistencia.entity';
import { EvaluacionAlumno } from 'src/evaluacion/entities/evaluacion_alumno.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
@Entity('alumno')
export class Alumno extends ClaseBaseEntity {
    @Column()
    nombre: string
    @Column()
    apellido: string
    @Column()
    edad: number

    @ManyToOne(() => Institucion, (institucion) => institucion.alumnos)
    institucion: Institucion;

    @OneToMany(() => Asistencia, (asistencia) => asistencia.alumno)
    asistencias: Asistencia[];

    @OneToMany(() => EvaluacionAlumno, (evaluacionAlumno) => evaluacionAlumno.alumno)
    evaluaciones_alumnos: EvaluacionAlumno[];


}
