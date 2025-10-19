import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { User } from 'src/user/entities/user.entity';

@Entity('historial_cliente')
export class HistorialCliente extends ClaseBaseEntity {

    @Column()
    fecha: Date;

    @Column()
    descripcion: string;

    @ManyToOne(() => Cliente, (cliente) => cliente.historial)
    cliente: Cliente;

    @ManyToOne(() => User, (user) => user.historialesClientes)
    user: User;
}
