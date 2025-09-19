import { Module } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluacion } from './entities/evaluacion.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { EvaluacionAlumno } from './entities/evaluacion_alumno.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Evaluacion, Alumno, EvaluacionAlumno])],
  controllers: [EvaluacionController],
  providers: [EvaluacionService],
})
export class EvaluacionModule {}
