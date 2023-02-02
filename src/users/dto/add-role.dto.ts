import { ApiProperty } from "@nestjs/swagger";
import { isNumber, IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: 'USER', description: 'Роль'})
    @IsString({message: 'Должно быть строкой'})
    readonly value: string;
    @ApiProperty({example: '1', description: 'Уникальный индентификатор пользователя'})
    readonly userId: number;
}