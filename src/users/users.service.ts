import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository){}

  db = this.userRepository.manager;

  async findAll() {
    return await this.db.query('select * from users');
  }

  async findOne(id: number) {
    return await this.db.query(`select * from users WHERE id = ${id}`);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    
  }

  async activateUser(id: number) {
    return await this.db.query(`UPDATE users SET is_active = true  WHERE id = ${id}`);
  }

  async remove(id: number) {
    return await this.db.query(`UPDATE users SET is_active = false  WHERE id = ${id}`);
  }
}
