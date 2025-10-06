import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contrato extends ClaseBaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @Column()
    monto: number;

    @Column()
    estado: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.contratos)
    cliente: Cliente;

}