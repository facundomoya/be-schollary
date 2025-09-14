import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitucionModule } from './institucion/institucion.module';
import { ModuloModule } from './modulo/modulo.module';
import { AlumnoModule } from './alumno/alumno.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { MateriaModule } from './materia/materia.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,                  
      username: 'root',
      password: '1234',
      database: 'schollary',
      entities: ['/**/*.entity{.ts,.js}'],
    }),

    
    InstitucionModule,
    UserModule,
    ModuloModule,
    AlumnoModule,
    AsistenciaModule,
    MateriaModule,
    EvaluacionModule,
  ],
})
export class AppModule {}
