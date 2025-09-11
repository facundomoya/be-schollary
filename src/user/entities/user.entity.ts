import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Institucion } from '../../institucion/entities/institucion.entity';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @OneToOne(() => Institucion)
    @JoinColumn()
    institucion: Institucion;

};