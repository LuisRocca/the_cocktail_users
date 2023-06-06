import { HttpException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { hash, compare } from 'bcrypt';

import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/users/users.repository';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {

  constructor( @InjectRepository(UserRepository) private userRepository: UserRepository,
  private jwtAuthService: JwtService ){}

  db = this.userRepository.manager

  async register(createAuthDto: CreateAuthDto) {
    const {password, nick_name, email, id_rol} = createAuthDto;
    const passwordToHass = await hash(password, 10);
    const res = await this.db.query(`SELECT * FROM users WHERE email = '${email}'`);
    if (res.length === 0) return await this.userRepository.manager.query(`INSERT INTO users (nick_name, email, password, id_rol) VALUES ('${nick_name}', '${email}','${passwordToHass}','${id_rol}');`)
    else throw new HttpException('EMAIL_ALREADY_EXISTS', 403)
  }
  async login(updateAuthDto: UpdateAuthDto) {
    const {email, password} = updateAuthDto;
    const res = await this.db.query(`SELECT * FROM users WHERE email = '${email}'`);
    if (res.length === 1) {
      const checkPassword = await compare(password, res[0].password)
      if(checkPassword) {
        const payload = {id : res.id, name: res.nick_name}
        const token = await this.jwtAuthService.sign(payload)
        const data = {
          user: res,
          token: token
        }
        return data;
      } else { throw new HttpException('PASSWORD_INCORRECT', 403)}
    } else { throw new HttpException('USER_NOT_FOUND', 404)}
  }
}
