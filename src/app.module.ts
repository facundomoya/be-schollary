import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ClienteModule } from './cliente/cliente.module';
import { AlertaModule } from './alerta/alerta.module';
import { FacturaModule } from './factura/factura.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { RolModule } from './rol/rol.module';
import { ContratoModule } from './contrato/contrato.module';
import { HistorialClienteModule } from './historial_cliente/historial_cliente.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "schollary",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/migrations/*{.ts,.js}"],
      synchronize: false,
      logging: true,
    }),
    UserModule,
    ClienteModule,
    AlertaModule,
    FacturaModule,
    ProyectoModule,
    RolModule,
    ContratoModule,
    HistorialClienteModule,
  ],
})
export class AppModule { }
