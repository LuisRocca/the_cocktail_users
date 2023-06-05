import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RolRepository } from './roles.repository';
import { Roles } from './entities/role.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RolRepository, Roles])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
