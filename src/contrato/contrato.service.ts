import { Injectable } from '@nestjs/common';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contrato } from './entities/contrato.entity';
import { Repository } from 'typeorm';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Cliente } from 'src/cliente/entities/cliente.entity';
@Injectable()
export class ContratoService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) { }

  async create(createContratoDto: CreateContratoDto): Promise<Contrato & { message: string }> {
    try {
      const cliente = await this.clienteRepository.findOneBy({ id: createContratoDto.clienteId });
      if (!cliente) {
        throw new NotFoundException('Cliente no encontrado.');
      }
      const contrato = this.contratoRepository.create({
        ...createContratoDto,
        cliente
      });
      await this.contratoRepository.save(contrato);
      return {
        message: 'Contrato creado correctamente',
        ...contrato,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error interno del servidor', error.message);
    }
  }

  async findAll(): Promise<{ message: string } & { records: Contrato[] }> {
    const contratos = await this.contratoRepository.find();
    return {
      message: 'Contratos obtenidos correctamente',
      records: contratos,
    };
  }

  async findOne(id: number): Promise<{ message: string } & Contrato> {
    try {
      const contrato = await this.contratoRepository.findOneBy({ id });
      if (!contrato) {
        throw new NotFoundException('Contrato no encontrado');
      }
      return {
        message: 'Contrato obtenido correctamente',
        ...contrato,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error interno del servidor', error.message);
    }
  }

  async update(id: number, updateContratoDto: UpdateContratoDto): Promise<{ message: string } & Contrato> {
    try {
      const contrato = await this.contratoRepository.findOneBy({ id });
      if (!contrato) {
        throw new NotFoundException('Contrato no encontrado para actualizar.');
      }
      const contratoActualizado = await this.contratoRepository.preload({
        id,
        ...updateContratoDto,
      });
      if (!contratoActualizado) {
        throw new NotFoundException('No se pudo cargar el contrato para actualizar.');
      }
      const updatedContrato = await this.contratoRepository.save(contratoActualizado);
      return {
        message: 'Contrato actualizado correctamente',
        ...updatedContrato,
      };
    } catch (error) {
      {
        if (error instanceof NotFoundException) {
          throw error;
        }
        throw new InternalServerErrorException('Error interno del servidor', error.message);
      }
    }
  }

  remove(id: number) {
    return `This action removes a #${id} contrato`;
  }
}
