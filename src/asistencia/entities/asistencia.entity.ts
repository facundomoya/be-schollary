import { Entity, Column, ManyToOne } from 'typeorm';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { Materia } from '../../materia/entities/materia.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';

@Entity('asistencia')   
export class Asistencia extends ClaseBaseEntity {
  @Column()
  fecha: Date;

  @ManyToOne(() => Materia, (materia) => materia.asistencias)
  materia: Materia;

  @ManyToOne(() => Alumno, (alumno) => alumno.asistencias)
  alumno: Alumno;
}
