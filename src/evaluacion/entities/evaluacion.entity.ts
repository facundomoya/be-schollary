import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Materia } from '../../materia/entities/materia.entity';
import { EvaluacionAlumno } from './evaluacion_alumno.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';

@Entity('evaluacion')
export class Evaluacion extends ClaseBaseEntity {
  @ManyToOne(() => Materia, (materia) => materia.evaluaciones)
  materia: Materia;

  @OneToMany(() => EvaluacionAlumno, (evaluacionAlumno) => evaluacionAlumno.evaluacion)
  evaluaciones_alumnos: EvaluacionAlumno[];

}