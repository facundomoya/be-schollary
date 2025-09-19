import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institucion_modulo')
export class InstitucionModulo {
    @PrimaryGeneratedColumn()
    id: number;
  
}
