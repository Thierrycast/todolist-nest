import { HttpException, Injectable } from '@nestjs/common';
import { taskRequestDTO, taskResponseDTO } from './dto/task.dto';
import { PrismaService } from 'src/database/PrismaService';
import {Request} from 'express'

interface User {
  id: string
  name: string
  email: string
}

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService){}

  async create(req: Request ,data: taskRequestDTO) {
    const {id} = req.user as User

    console.log(req.user);
    

    const task = await this.prisma.task.create({
      data:{
        ...data,
        userId: id
      }
    })
    return task
  }

  async findAll(req: Request) {
    
    const {id} = req.user as User

    const tasks = await this.prisma.task.findMany({where:{userId: id}})
    return tasks
  }

  async findOne(id: string) {
    
    const task = await this.prisma.task.findFirst({where: {id}})

    if (!task) {
      throw new HttpException("essa task não existe", 404)
    }

    return task
  }

  async update(req: Request, id: string, data: taskRequestDTO) {
    const { id: userId } = req.user as User;

    const taskExist = await this.prisma.task.findFirst({where: {id}})

    if (!taskExist) {
      throw new HttpException("essa task não existe", 404)
    } 
    
    if (taskExist.userId !== userId) {
      throw new HttpException("não autorizado", 400)
    }

    const taskUpdated = await this.prisma.task.update({data, where:{id}})

    if (!taskUpdated) {
      throw new HttpException("task não atualizada.", 500)
    }

    return taskUpdated
  }

  async remove(req: Request, id: string) {
       const { id: userId } = req.user as User;
    
    const taskExist = await this.prisma.task.findFirst({where: {id}})

    if (!taskExist) {
      throw new HttpException("essa task não existe", 404)
    } 
    
    if (taskExist.userId !== userId) {
      throw new HttpException("não autorizado", 400)
    }

    return await this.prisma.task.delete({where:{id}})
  }
}
