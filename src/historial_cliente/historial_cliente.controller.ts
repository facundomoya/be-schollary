import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistorialClienteService } from './historial_cliente.service';
import { CreateHistorialClienteDto } from './dto/create-historial_cliente.dto';
import { UpdateHistorialClienteDto } from './dto/update-historial_cliente.dto';

@Controller('historial-cliente')
export class HistorialClienteController {
  constructor(private readonly historialClienteService: HistorialClienteService) {}

  @Post()
  create(@Body() createHistorialClienteDto: CreateHistorialClienteDto) {
    return this.historialClienteService.create(createHistorialClienteDto);
  }

  @Get()
  findAll() {
    return this.historialClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historialClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistorialClienteDto: UpdateHistorialClienteDto) {
    return this.historialClienteService.update(+id, updateHistorialClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historialClienteService.remove(+id);
  }
}
