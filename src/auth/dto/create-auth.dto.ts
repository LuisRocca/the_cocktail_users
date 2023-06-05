import {IsEmail, IsNotEmpty} from 'class-validator'
export class CreateAuthDto {
    
    
    nick_name: String;
    @IsNotEmpty()
    @IsEmail()
    email: String;
    @IsNotEmpty()
    password: String;
    
    id_rol: number;

}
