import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('factura')
export class Factura extends ClaseBaseEntity{

  @Column()
  fecha_emision: Date;

  @Column()
  monto: number;

  @Column()
  estado_pago: string;

  @Column()
  descripcion: string;

  @Column()
  numero: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.facturas)
  cliente: Cliente;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.facturas)
  proyecto: Proyecto;
}
