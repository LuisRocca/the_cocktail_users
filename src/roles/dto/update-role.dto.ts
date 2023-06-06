import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(15)
    rol_name: String
    @MinLength(3)
    @MaxLength(100)
    description: String
}
