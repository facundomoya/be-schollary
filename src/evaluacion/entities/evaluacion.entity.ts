import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Materia } from '../../materia/entities/materia.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Entity('evaluacion')
export class Evaluacion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Materia, (materia) => materia.evaluaciones)
  materia: Materia;

  @ManyToMany(() => Alumno)
  @JoinTable({
    name: 'evaluacion_alumno',
    joinColumn: { name: 'evaluacion_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'alumno_id', referencedColumnName: 'id' },
  })
  alumnos: Alumno[];

}