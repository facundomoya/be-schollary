import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post("/crear")
  create(@Body() createClienteDto: CreateClienteDto) {
    const cliente = this.clienteService.create(createClienteDto);
    return cliente;
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number) {
    return this.clienteService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
