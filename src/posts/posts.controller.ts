import { Controller, UseGuards } from '@nestjs/common';
import { Body, Post, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/auth/role-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreatePostDto, RemovePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}
    @ApiOperation({summary: 'Создание поста'})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image?) {
        if (!image) {
            return this.postService.create(dto)
        }
        return this.postService.create(dto, image)
    }
    @ApiOperation({summary: 'Удаление поста'})
    @Post('/remove')
    removePost(@Body() dto: RemovePostDto) {
        return this.postService.remove(dto)
    }
    @ApiOperation({summary: 'Удаление всех непревязанных постов'})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/remove_null')
    removePostNull() {
        return this.postService.removeNull()
    }
}
