import {IsEmail, IsNotEmpty, MaxLength, MinLength, } from 'class-validator'

export class CreateAuthDto {
 
    nick_name: String;
    @IsNotEmpty()
    @IsEmail()
    email: String;
    @IsNotEmpty()
    @MinLength(6)
    password: String;
    
    id_rol: number;

}
