import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { InstitucionModulo } from './institucion_modulo.entity';
@Entity('institucion')
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => InstitucionModulo, InstitucionModulo => InstitucionModulo.institucion)
    institucionModulo: InstitucionModulo[];

};
