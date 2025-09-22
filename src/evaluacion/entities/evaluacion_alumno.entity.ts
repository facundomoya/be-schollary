import { Column, Entity, ForeignKey, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Evaluacion } from './evaluacion.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Entity('evaluacion_alumno')
export class EvaluacionAlumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nota: number;

  @ManyToOne(() => Evaluacion, (evaluacion) => evaluacion.evaluaciones_alumnos)
  evaluacion: Evaluacion;

  @ManyToOne(() => Alumno, (alumno) => alumno.evaluaciones_alumnos)
  alumno: Alumno;

}
