import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: 'Hello World!', description: 'Название поста'})
    @IsString({message: 'Должго быть строкой'})
    readonly title: string;
    @ApiProperty({example: 'В этом посте я расскажу:...', description: 'Контент поста'})
    @IsString({message: 'Должго быть строкой'})
    readonly content: string;
    @ApiProperty({example: '1', description: 'Уникальный индентификатор пользователя'})
    readonly userId: number;
}

export class RemovePostDto {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор поста'})
    readonly id: number;
}