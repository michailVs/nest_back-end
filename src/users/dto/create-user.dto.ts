import { ApiProperty } from "@nestjs/swagger/dist";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректная электронная почта'})
    readonly email: string;
    @ApiProperty({example: 'qwerty123', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Должно быть не меньше 4 и не больше 16 символов'})
    readonly password: string;
}