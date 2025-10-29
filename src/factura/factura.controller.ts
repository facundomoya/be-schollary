import { Controller, Get, Post, Body, Param, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import { FacturaService } from './factura.service';
import { FacturaPdfService } from './factura_pdf.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Factura')
@Controller('factura')
export class FacturaController {
  constructor(
    private readonly facturaService: FacturaService,
    private readonly facturaPdfService: FacturaPdfService,
  ) {}

  @Post("/crear")
  create(@Body() dto: CreateFacturaDto) {
    return this.facturaService.create(dto);
  }

  @Get()
  findAll() {
    return this.facturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturaService.findOne(+id);
  }

  @Get(':id/pdf')
  async verFacturaPDF(@Param('id') id: string, @Res() res: Response) {
    const factura = await this.facturaService.getFacturaParaPDF(+id);
    await this.facturaPdfService.generarPDFStream(factura, res);
  }
}
