import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,

  ) { }

  async create(createFacturaDto: CreateFacturaDto): Promise<{ message: string } & Factura> {
    try {
      const cliente = await this.clienteRepository.findOneBy({ id: createFacturaDto.clienteId });
      if (!cliente) {
        throw new NotFoundException('Cliente no encontrado.');
      }
      const proyecto = await this.proyectoRepository.findOneBy({ id: createFacturaDto.proyectoId });
      if (!proyecto) {
        throw new NotFoundException('Proyecto no encontrado.');
      }
      const numero = await this.generarNumeroSecuencial();
      const factura = this.facturaRepository.create({
        numero,
        fecha_emision: new Date(createFacturaDto.fecha_emision),
        monto: createFacturaDto.monto,
        estado_pago: createFacturaDto.estado_pago,
        descripcion: createFacturaDto.descripcion,
        cliente,
        proyecto,
      });

      const facturaGuardada = await this.facturaRepository.save(factura);

      return {
        message: 'Factura creada correctamente',
        ...facturaGuardada
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        "Error al crear la factura.", error);
    }
  }

  async findAll(): Promise<{ message: string, records: Factura[] }> {
    const facturas = await this.facturaRepository.find({ relations: ['cliente', 'proyecto'] });
    return {
      message: 'Facturas obtenidas correctamente',
      records: facturas
    };
  }

  async findOne(id: number): Promise<{ message: string; } & Factura> {
    try {
      const factura = await this.facturaRepository.findOne({
        where: { id },
        relations: ['cliente', 'proyecto'],
      });
      if (!factura) {
        throw new NotFoundException('Factura no encontrada.');
      }
      return {
        message: 'Factura obtenida correctamente',
        ...factura
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException(
        "Error al obtener la factura.", error);
    }
  }

  async getFacturaParaPDF(id: number): Promise<Factura> {
    try {
      const factura = await this.facturaRepository.findOne({
        where: { id },
        relations: ['cliente', 'proyecto'],
      });
      if (!factura) {
        throw new NotFoundException('Factura no encontrada.');
      }
      return factura;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        "Error al obtener la factura para PDF.", error);
    }
  }

  async generarNumeroSecuencial(): Promise<string> {
    const ultima = await this.facturaRepository.find({ order: { id: 'DESC' }, take: 1 });
    const siguiente = ultima.length > 0 ? ultima[0].id + 1 : 1;
    return `FAC-${String(siguiente).padStart(6, '0')}`;
  }
}
