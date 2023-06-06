import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateRoleDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(15)
    rol_name: String
    @MinLength(3)
    @MaxLength(200)
    description: String
}
