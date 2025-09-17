import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne } from 'typeorm';
import { Materia } from '../../materia/entities/materia.entity';
import { EvaluacionAlumno } from '../../alumno/entities/evaluacion_alumno.entity';

@Entity('evaluacion')
export class Evaluacion {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => EvaluacionAlumno, evaluacionAlumno => evaluacionAlumno.evaluaciones)
  alumnos: EvaluacionAlumno[];

  @ManyToOne(() => Materia, (materia) => materia.evaluaciones)
  materia: Materia;

}