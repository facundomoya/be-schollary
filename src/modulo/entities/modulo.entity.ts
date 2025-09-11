import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { InstitucionModulo } from '../../institucion/entities/institucion_modulo.entity';
@Entity('modulo')
export class Modulo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;

    @OneToMany(() => InstitucionModulo, InstitucionModulo => InstitucionModulo.modulo)
    institucionModulo: InstitucionModulo[]; 

}
