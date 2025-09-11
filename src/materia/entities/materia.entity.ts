import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Evaluacion } from 'src/evaluacion/entities/evaluacion.entity';

@Entity('materia')
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
