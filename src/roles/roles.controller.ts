import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    this.rolesService.create(createRoleDto);
    return {response : 'rol successfully create'}
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.rolesService.findOne(+id);
    if ( response.length === 0) throw new HttpException('ROL_NOT_FOUND', 404)
    else return response 
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    const response = await this.rolesService.update(+id, updateRoleDto);
    if (response[1] === 0) throw new HttpException('INCORRECT_PARAMETER', 403)
    else return { response: 'record successfully modified'}
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = this.rolesService.remove(+id);
    if (response[1] === 0) throw new HttpException('INCORRECT_PARAMETER', 403)
    else return { response: 'record successfully deleted'}
  }
}
