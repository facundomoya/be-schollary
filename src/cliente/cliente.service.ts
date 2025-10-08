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
      const existingCliente = await this.clienteRepository.findOne({
        where: [
          { nombre: createClienteDto.nombre },
          { cuit: createClienteDto.cuit },
          { email: createClienteDto.email },
        ],
      });
      if (existingCliente) {
        let campoDuplicado = '';
        if (existingCliente.nombre === createClienteDto.nombre) {
          campoDuplicado = `nombre ${createClienteDto.nombre}`;
        } else if (existingCliente.cuit === createClienteDto.cuit) {
          campoDuplicado = `CUIT ${createClienteDto.cuit}`;
        } else if (existingCliente.email === createClienteDto.email) {
          campoDuplicado = `email ${createClienteDto.email}`;
        }
        throw new BadRequestException(
          `Ya existe un cliente registrado con el ${campoDuplicado}.`,
        );
      }
      const cliente = this.clienteRepository.create(createClienteDto);
      const savedCliente = await this.clienteRepository.save(cliente);
      return {
        message: 'Cliente creado correctamente.',
        data: savedCliente,
      };
    } catch (error) {
      throw new BadRequestException(
        `Error al crear el cliente: ${error.message}`,
      );
    }
  };

  async findAll() {
    try {
      const clientes = await this.clienteRepository.find();
      if (clientes.length === 0) {
        return {
          message: 'No hay clientes registrados.',
          data: [],
        };
      }
      return {
        message: 'Lista de clientes obtenida correctamente.',
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
        message: 'Cliente obtenido correctamente.',
        data: cliente,
      };
    } catch (error) {
      throw new BadRequestException('Error al obtener el cliente.');
    }
  };

  update(id: number) {
  }

  remove(id: number) {
  }
}