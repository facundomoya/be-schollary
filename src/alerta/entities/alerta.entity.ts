import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alerta extends ClaseBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
