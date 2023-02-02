import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class BanUserDto {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор пользователя'})
    readonly userId: number;
    @ApiProperty({example: 'Спам', description: 'Причина блокировки'})
    @IsString({message: 'Должно быть строкой'})
    readonly banReason: string;
}

export class UnBanUserDto {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор пользователя'})
    readonly userId: number;
}