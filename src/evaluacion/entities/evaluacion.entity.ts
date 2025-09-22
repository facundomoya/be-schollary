import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Materia } from '../../materia/entities/materia.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { EvaluacionAlumno } from './evaluacion_alumno.entity';

@Entity('evaluacion')
export class Evaluacion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Materia, (materia) => materia.evaluaciones)
  materia: Materia;

  @OneToMany(() => EvaluacionAlumno, (evaluacionAlumno) => evaluacionAlumno.evaluacion)
  evaluaciones_alumnos: EvaluacionAlumno[];

}