import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto, RemovePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FilesService,
                private userService: UsersService) {}
    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.postRepository.create({...dto, image: fileName})
        return post
    }

    async remove(dto: RemovePostDto) {
        const post = await this.postRepository.findByPk(dto.id)
        const user = await this.userService.getUserById(post.userId)
        if (!post || !user) {
            throw new HttpException('Такой пост не найден', HttpStatus.NOT_FOUND)
        }
        await this.fileService.removeFile(post.image)
        user.$remove('posts', post.id)
        return {message: `Пост с id ${dto.id} удалён`}
    }
    async removeNull() {
        const posts = await this.postRepository.findAll()
        if (!posts) {
            throw new HttpException('Постов не найдено', HttpStatus.NOT_FOUND)
        }
        posts.map(post => post.userId === null ? post.destroy() : post)
        return posts
    }
}
