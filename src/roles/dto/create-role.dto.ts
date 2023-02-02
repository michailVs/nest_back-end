import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Значени роли'})
    @IsString({message: 'Должго быть строкой'})
    readonly value: string;
    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @IsString({message: 'Должго быть строкой'})
    readonly description: string;
}