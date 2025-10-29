import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) { }

  async create(createClienteDto: CreateClienteDto): Promise<{ message: string } & Cliente> {
    const cliente = this.clienteRepository.create(createClienteDto);
    await this.clienteRepository.save(cliente);
    return {
      message: 'Cliente creado correctamente',
      ...cliente,
    };
  }

  async findAll(): Promise<{ message: string; records: Cliente[] }> {
    const clientes = await this.clienteRepository.find({
      relations: ['proyectos']
    });
    return {
      message: 'Clientes obtenidos correctamente',
      records: clientes,
    };
  }

  async findOne(id: number): Promise<{ message: string } & Cliente> {
    try {
      const cliente = await this.clienteRepository.findOne({
        where: { id },
        relations: ['proyectos']
      });
      if (!cliente) {
        throw new NotFoundException('Cliente no encontrado.');
      }
      return {
        message: 'Cliente obtenido correctamente',
        ...cliente,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error interno al obtener el cliente', error.message);
    }
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<{ message: string } & Cliente> {
    try {
      const cliente = await this.clienteRepository.findOneBy({ id });
      if (!cliente) {
        throw new NotFoundException('Cliente no encontrado para actualizar.');
      }
      await this.clienteRepository.update(id, updateClienteDto);
      const updatedCliente = await this.clienteRepository.findOneBy({ id });
      return {
        message: 'Cliente actualizado correctamente',
        ...updatedCliente,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error interno al actualizar el cliente', error.message);
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      const result = await this.clienteRepository.softDelete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Cliente no encontrado para eliminar.');
      }
      return {
        message: 'Cliente eliminado correctamente',
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error interno al eliminar el cliente', error.message);
    }
  }
}
