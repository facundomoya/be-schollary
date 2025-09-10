import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluacionAlumnoService } from './evaluacion_alumno.service';
import { CreateEvaluacionAlumnoDto } from './dto/create-evaluacion_alumno.dto';
import { UpdateEvaluacionAlumnoDto } from './dto/update-evaluacion_alumno.dto';

@Controller('evaluacion-alumno')
export class EvaluacionAlumnoController {
  constructor(private readonly evaluacionAlumnoService: EvaluacionAlumnoService) {}

  @Post()
  create(@Body() createEvaluacionAlumnoDto: CreateEvaluacionAlumnoDto) {
    return this.evaluacionAlumnoService.create(createEvaluacionAlumnoDto);
  }

  @Get()
  findAll() {
    return this.evaluacionAlumnoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluacionAlumnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluacionAlumnoDto: UpdateEvaluacionAlumnoDto) {
    return this.evaluacionAlumnoService.update(+id, updateEvaluacionAlumnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluacionAlumnoService.remove(+id);
  }
}
