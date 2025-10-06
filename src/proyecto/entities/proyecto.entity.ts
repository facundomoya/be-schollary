import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Entity()
export class Proyecto extends ClaseBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre_proyecto: string;
    @Column()
    descripcion: string;
    @Column()
    fecha_inicio: Date;
    @Column()
    fecha_fin: Date;
    @Column()
    estado: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.proyectos)
    cliente: Cliente;
}
