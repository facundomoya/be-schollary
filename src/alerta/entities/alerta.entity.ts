import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('alerta')
export class Alerta extends ClaseBaseEntity {

  @Column()
  mensaje: string;
  @Column()
  fecha_alerta: Date;
  @Column()
  tipo_alerta: string;
  @Column()
  descripcion: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.alertas)
  cliente: Cliente;
}
