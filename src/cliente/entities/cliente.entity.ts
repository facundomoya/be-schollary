import { Alerta } from 'src/alerta/entities/alerta.entity';
import { ClaseBaseEntity } from 'src/common/claseBase.entity';
import { Contrato } from 'src/contrato/entities/contrato.entity';
import { Factura } from 'src/factura/entities/factura.entity';
import { HistorialCliente } from 'src/cliente/entities/historial_cliente.entity';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import { Column, Entity, OneToMany } from 'typeorm';
@Entity('cliente')
export class Cliente extends ClaseBaseEntity {

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column()
  cuit: string;

  @Column()
  estado: string;

  @OneToMany(() => Alerta, (alerta) => alerta.cliente)
  alertas: Alerta[];

  @OneToMany(() => Factura, (factura) => factura.cliente)
  facturas: Factura[];

  @OneToMany(() => Proyecto, (proyecto) => proyecto.cliente)
  proyectos: Proyecto[];

  @OneToMany(() => HistorialCliente, (historialcliente) => historialcliente.cliente)
  historial: HistorialCliente[];

  @OneToMany(() => Contrato, (contrato) => contrato.cliente)
  contratos: Contrato[];
}
