import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modulo')
export class Modulo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;

   

}
