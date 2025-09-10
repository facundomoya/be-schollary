import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Institucion } from './institucion/entities/institucion.entity';
import { InstitucionModule } from './institucion/institucion.module';
import { ModuloModule } from './modulo/modulo.module';
import { InstitucionModuloModule } from './institucion_modulo/institucion_modulo.module';
import { AlumnoModule } from './alumno/alumno.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { Modulo } from './modulo/entities/modulo.entity';
import { MateriaModule } from './materia/materia.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { EvaluacionAlumnoModule } from './evaluacion_alumno/evaluacion_alumno.module';
import { Alumno } from './alumno/entities/alumno.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,                  
      username: 'root',
      password: '1234',
      database: 'schollary',
      entities: [User, Institucion, Modulo, Alumno], //no van tablas intermedias 
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Institucion]),
    InstitucionModule,
    ModuloModule,
    InstitucionModuloModule,
    AlumnoModule,
    AsistenciaModule,
    MateriaModule,
    EvaluacionModule,
    EvaluacionAlumnoModule,
  ],
})
export class AppModule {}
