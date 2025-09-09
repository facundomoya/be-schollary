import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany } from 'typeorm';
import { Institucion } from '../../institucion/entities/institucion.entity';
@Entity()
export class Modulo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;

    @ManyToMany(() => Institucion, (institucion) => institucion.modulos)
    instituciones: Institucion[];
}
