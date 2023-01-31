import { ApiProperty } from "@nestjs/swagger/dist";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
    title: string,
    content: string,
    userId: number,
    image: string,
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Название', description: 'Тайтл'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Что-то в посте', description: 'Контент'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: 'Картинка в посте', description: 'Картинка'})
    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(() => User)
    author: User
}