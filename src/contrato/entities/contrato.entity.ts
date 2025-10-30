import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('contrato')
export class Contrato extends ClaseBaseEntity{

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