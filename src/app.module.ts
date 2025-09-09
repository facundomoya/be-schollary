import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Institucion } from './institucion/entities/institucion.entity';
import { InstitucionModule } from './institucion/institucion.module';
import { ModuloModule } from './modulo/modulo.module';
import { InstitucionModuloModule } from './institucion_modulo/institucion_modulo.module';
import { AlumnoModule } from './alumno/alumno.module';
import { PagoModule } from './pago/pago.module';
import { AsistenciaModule } from './asistencia/asistencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,                  
      username: 'root',
      password: '1234',
      database: 'schollary',
      entities: [User, Institucion],
      synchronize: true,          
    }),
    TypeOrmModule.forFeature([User, Institucion]),
    InstitucionModule,
    ModuloModule,
    InstitucionModuloModule,
    AlumnoModule,
    PagoModule,
    AsistenciaModule,
  ],
})
export class AppModule {}
