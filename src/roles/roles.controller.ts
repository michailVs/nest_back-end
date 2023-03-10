import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}
    @ApiOperation({summary: 'Создание роли'})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto)
    }
    @ApiOperation({summary: 'Получение роли по значению'})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}
