import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { Materia } from '../../materia/entities/materia.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Entity('evaluacion')
export class Evaluacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nota: number;


}