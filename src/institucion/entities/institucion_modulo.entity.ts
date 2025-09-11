import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Institucion } from './institucion.entity';
import { Modulo } from '../../modulo/entities/modulo.entity';


@Entity('institucion_modulo')
export class InstitucionModulo {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Institucion, (institucion) => institucion.institucionModulo)
    institucion: Institucion;

    @ManyToOne(() => Modulo, (modulo) => modulo.institucionModulo)
    modulo: Modulo;
  
}
