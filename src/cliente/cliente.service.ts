import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) { }

  async create(createClienteDto: CreateClienteDto) {
    try {
      const cliente = await this.clienteRepository.findOne({
        where: [
          { nombre: createClienteDto.nombre },
          { telefono: createClienteDto.telefono }
        ]
      });
      if (cliente) {
        throw new BadRequestException('El nombre del cliente o el teléfono ya están en uso.');
      }
      const nuevoCliente = this.clienteRepository.create(createClienteDto);
      await this.clienteRepository.save(nuevoCliente);
      return {
        message: 'Cliente creado correctamente.',
        data: nuevoCliente,
      };
    } catch (error) {
      throw new BadRequestException(`Error al crear el cliente: ${error.message}`);
    }
  };

  async findAll() {
    try {
      const clientes = await this.clienteRepository.find();
      return {
        data: clientes,
      };
    } catch (error) {
      throw new BadRequestException('Error al obtener los clientes.');
    }
  };

  async findOne(id: number) {
    try {
      const cliente = await this.clienteRepository.findOneBy({ id });
      if (!cliente) {
        return {
          message: 'No se encontró el cliente.',
          data: null,
        };
      }
      return {
        data: cliente,
      };
    } catch (error) {
      throw new BadRequestException('Error al obtener el cliente.');
    }
  };

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    try {
      const cliente = await this.clienteRepository.findOneBy({ id });
      if (!cliente) {
        return {
          message: 'No se encontro el cliente.',
          data: null,
        };
      }
      const updatedCliente = this.clienteRepository.merge(cliente, updateClienteDto);
      await this.clienteRepository.save(updatedCliente);
      return {
        message: 'Cliente actualizado correctamente.',
        data: updatedCliente,
      };
    } catch (error) {
      throw new BadRequestException(`Error al actualizar el cliente: ${error.message}`);
    }
  };

  remove(id: number) {
  };

}