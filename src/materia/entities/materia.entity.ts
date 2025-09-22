import { Entity, ManyToOne, Column, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Asistencia } from '../../asistencia/entities/asistencia.entity';
import { Evaluacion } from '../../evaluacion/entities/evaluacion.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
@Entity('materia')
export class Materia extends ClaseBaseEntity {
  @Column()
  nombre: string;

  @ManyToOne(() => User, (user) => user.materias)
  user: User;

  @OneToMany(() => Asistencia, (asistencia) => asistencia.materia)
  asistencias: Asistencia[];

  @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.materia)
  evaluaciones: Evaluacion[];
}
