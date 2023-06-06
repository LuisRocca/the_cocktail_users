import { Controller, Get, Body, Patch, Param, UseGuards, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.usersService.findOne(+id);
    if ( response.length === 0) throw new HttpException('USER_NOT_FOUND', 404)
    else return response 
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  @UseGuards(AuthGuard)
  @Patch('activate/:id')
  activateUser(@Param('id') id: string) {
    return this.usersService.activateUser(+id);
  }
  @UseGuards(AuthGuard)
  @Patch('remove/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
