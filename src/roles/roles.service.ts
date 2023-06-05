import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RolRepository } from './roles.repository';

@Injectable()
export class RolesService {

  constructor(@InjectRepository(RolRepository) private rolRepository: RolRepository){}
 
  db = this.rolRepository.manager;

  async create(createRoleDto: CreateRoleDto) {
    const {rol_name, description} = createRoleDto
    return await this.db.query(`INSERT INTO roles (rol_name, description) VALUES ('${rol_name}', '${description}');`);
  }

  async findAll() {
    return await this.db.query('SELECT * FROM roles');
  }

  async findOne(id: number) {
    return await this.db.query(`SELECT * FROM roles WHERE id = ${id}`);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const {rol_name, description} = updateRoleDto;
    return await this.db.query(`UPDATE  roles SET rol_name='${rol_name}', description ='${description}' WHERE id = ${id};`);
  }

  async remove(id: number) {
    return await this.db.query(`UPDATE  roles SET is_deleted= false WHERE id = ${id};`);
  }
}
