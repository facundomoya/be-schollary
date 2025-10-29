import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,

    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) { }

  async create(createProyectoDto: CreateProyectoDto): Promise<{ message: string } & Proyecto> {
    try {
      const { clienteId, ...data } = createProyectoDto;
      const cliente = await this.clienteRepository.findOneBy({ id: Number(clienteId) });
      if (!cliente) {
        throw new NotFoundException('Cliente asociado no encontrado.');
      }
      const proyecto = this.proyectoRepository.create({
        ...data,
        cliente,
      });
      await this.proyectoRepository.save(proyecto);
      return {
        message: 'Proyecto creado correctamente',
        ...proyecto,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException({ 'Error al crear el proyecto': error.message });
    }
  }

  async findAll(): Promise<{ message: string; records: Proyecto[] }> {
    const proyectos = await this.proyectoRepository.find();
    return {
      message: 'Proyectos obtenidos correctamente',
      records: proyectos,
    };
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto): Promise<{ message: string } & Proyecto> {
    try {
      const proyecto = await this.proyectoRepository.findOneBy({ id });
      if (!proyecto) {
        throw new NotFoundException('Proyecto no encontrado para actualizar.');
      }
      await this.proyectoRepository.update(id, updateProyectoDto)
      const updatedProyecto = await this.proyectoRepository.findOneBy({ id });

      return {
        message: 'Proyecto actualizado correctamente',
        ...updatedProyecto,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException({ message: "Error interno al actualizar el proyecto", error: error.message });
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      const result = await this.proyectoRepository.softDelete(id);

      if (result.affected === 0) {
        throw new NotFoundException('Proyecto no encontrado para eliminar.');
      }

      return {
        message: 'Proyecto eliminado correctamente',
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      throw new InternalServerErrorException({ 'Error interno al eliminar el proyecto': error.message });
    }
  }
}
