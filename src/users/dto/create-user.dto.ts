import {IsNotEmpty} from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    nick_name: String;
    email: String;
    password: String;
    id_rol: number;
}
