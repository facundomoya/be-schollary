import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class HistorialCliente extends ClaseBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    descripcion: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.historial)
    cliente: Cliente;

    @ManyToOne(() => User, (user) => user.historialesClientes)
    user: User;
}
