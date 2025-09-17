import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Evaluacion} from './evaluacion.entity';
import { Alumno} from '../../alumno/entities/alumno.entity'

@Entity('evaluacion_alumno')
export class EvaluacionAlumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nota: number;

  @ManyToOne(() => Evaluacion, (evaluacion) => evaluacion.alumnos)
  evaluaciones: Evaluacion;

  @ManyToOne(() => Alumno, (alumno) => alumno.evaluaciones)
  alumnos: Alumno;
}
