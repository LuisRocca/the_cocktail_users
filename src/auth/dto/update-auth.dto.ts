import { PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './create-auth.dto';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
    @IsNotEmpty()
    @IsEmail()
    email: String;
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(16)
    password: String;
}
