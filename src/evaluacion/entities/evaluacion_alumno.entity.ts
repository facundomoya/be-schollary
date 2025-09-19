import { Column, Entity, ForeignKey, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('evaluacion_alumno')
export class EvaluacionAlumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nota: number;

}
