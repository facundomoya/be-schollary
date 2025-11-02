import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}
  async create(createRolDto: CreateRolDto) {
    const rol = this.rolRepository.create(createRolDto);
    await this.rolRepository.save(rol);
    return rol;
  }

  findAll() {
    return `This action returns all rol`;
  }

  async findOne(id: number) {
    return await this.rolRepository.findOne({ where: { id } });
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return `This action updates a #${id} rol`;
  }

  remove(id: number) {
    return `This action removes a #${id} rol`;
  }
}
