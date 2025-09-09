import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitucionModuloService } from './institucion_modulo.service';
import { CreateInstitucionModuloDto } from './dto/create-institucion_modulo.dto';
import { UpdateInstitucionModuloDto } from './dto/update-institucion_modulo.dto';

@Controller('institucion-modulo')
export class InstitucionModuloController {
  constructor(private readonly institucionModuloService: InstitucionModuloService) {}

  @Post()
  create(@Body() createInstitucionModuloDto: CreateInstitucionModuloDto) {
    return this.institucionModuloService.create(createInstitucionModuloDto);
  }

  @Get()
  findAll() {
    return this.institucionModuloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institucionModuloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstitucionModuloDto: UpdateInstitucionModuloDto) {
    return this.institucionModuloService.update(+id, updateInstitucionModuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institucionModuloService.remove(+id);
  }
}
