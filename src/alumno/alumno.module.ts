import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { EvaluacionAlumno } from './entities/evaluacion_alumno.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Alumno, EvaluacionAlumno])],
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}
