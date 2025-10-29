import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';
import { Factura } from './entities/factura.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaPdfService } from './factura_pdf.service';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Factura, Cliente, Proyecto])],
  controllers: [FacturaController],
  providers: [FacturaService, FacturaPdfService],
})
export class FacturaModule {}
