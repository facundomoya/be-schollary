import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Factura extends ClaseBaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

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
