import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TaskService } from './task.service';

import {taskRequestDTO} from './dto/task.dto'
import { JwtAuthGuard } from 'src/auth/auth.guard';
import {Request} from 'express'

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Req() req: Request ,@Body() data: taskRequestDTO) {
    return this.taskService.create(req, data);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.taskService.findAll(req);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() data: taskRequestDTO) {
    return this.taskService.update(req, id, data);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.taskService.remove(req, id);
  }
}
