import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/PrismaService';
import {schemaRegisterUser} from '../../validations/schemaUsers'
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async create(data: User) {
    try {

      await schemaRegisterUser.validate(data);

      const emailExist = await this.prisma.user.findFirst({where:{email : data.email}})
  
      
      if (emailExist) {
        throw new HttpException("o email ja pertence a um usuario", 400)
      }     

      const {password, ...user} = await this.prisma.user.create({ data})
      return user
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: {
        id:true,
        name: true,
        email:true,
      }
    })
    return users
  }

  async findOne(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where:{id},
        select:{
          id:true,
          name:true,
          email:true,
        }
      })

      if (!user) {
        throw new HttpException("Usuario não encontrado.",404)
      }
      
      return user
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async update(id: string, data: UpdateUserDto) {
    try {
      const userExist = await this.prisma.user.findUnique({where:{id}})

      if (!userExist) {
        throw new HttpException("Usuario não encontrado.",404)
      }

      const emailExist = await this.prisma.user.findFirst({
        where: {
          email: data.email
        }
      })


      if (emailExist && emailExist.id !== id) {
        throw new HttpException("Este email já está cadastrado.",409)
      }

      return await this.prisma.user.update({
        data,
        where:{
          id
        }
      })
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async remove(id: string) {
    try {
      const userExist = await this.prisma.user.findUnique({where:{id}})

      if (!userExist) {
        throw new HttpException("Usuario não encontrado.",404)
      }

      return await this.prisma.user.delete({where:{id}})
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
