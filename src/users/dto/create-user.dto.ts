import {IsNotEmpty} from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    nick_name: String;
    @IsNotEmpty()
    email: String;
    @IsNotEmpty()
    password: String;
    
    id_rol: number;
}
