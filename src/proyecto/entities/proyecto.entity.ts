import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Factura } from 'src/factura/entities/factura.entity';

@Entity('proyecto')
export class Proyecto extends ClaseBaseEntity {
 
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

    @OneToMany(() => Factura, (factura) => factura.proyecto)
    facturas: Factura[];
}
