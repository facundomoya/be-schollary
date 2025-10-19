import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Cliente, (cliente) => cliente.facturas)
  cliente: Cliente;
}
