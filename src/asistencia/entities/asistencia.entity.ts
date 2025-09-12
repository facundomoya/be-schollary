import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { Materia } from '../../materia/entities/materia.entity';

@Entity('asistencia')   
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Materia, (materia) => materia.asistencias)
  materia: Materia;

  @ManyToOne(() => Alumno, (alumno) => alumno.asistencias)
  alumno: Alumno;
}
