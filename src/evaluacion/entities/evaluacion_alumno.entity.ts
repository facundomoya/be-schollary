import { Column, Entity, ManyToOne } from 'typeorm';
import { Evaluacion } from './evaluacion.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';

@Entity('evaluacion_alumno')
export class EvaluacionAlumno extends ClaseBaseEntity {
  @Column()
  nota: number;

  @ManyToOne(() => Evaluacion, (evaluacion) => evaluacion.evaluaciones_alumnos)
  evaluacion: Evaluacion;

  @ManyToOne(() => Alumno, (alumno) => alumno.evaluaciones_alumnos)
  alumno: Alumno;

}
