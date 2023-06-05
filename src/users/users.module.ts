import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { User } from './entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
