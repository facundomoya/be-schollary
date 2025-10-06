import { Entity, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { HistorialCliente } from 'src/historial_cliente/entities/historial_cliente.entity';
@Entity('user')
export class User extends ClaseBaseEntity {
    @Column()
    user_name: string;

    @Column()
    password: string;

    @ManyToOne(() => Rol, (rol) => rol.users)
    rol: Rol;

    @OneToMany(() => HistorialCliente, (historial) => historial.user)
    historialesClientes: HistorialCliente[];
};