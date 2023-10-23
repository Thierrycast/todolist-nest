import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/database/PrismaService";
import { UserService } from "src/module/user/user.service";
import { LoginDto } from "./dto/login-user.dto";
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from "src/module/user/dto/user.dto";
import { User } from "src/module/user/user.model";

@Injectable()
export class AuthService{
    constructor(
        private readonly prismaService: PrismaService,
        private jwtService: JwtService,
        private readonly userService: UserService
        ){}

        async login(data: LoginDto){
            const {email, password} = data

            const user = await this.prismaService.user.findUnique({
                where: {email}
            })

            if (!user) {
                throw new NotFoundException('email ou senha incorreto.')
            }

            const validadePassword = await bcrypt.compare(password, user.password)

            if (!validadePassword) {
                throw new NotFoundException('email ou senha incorreto.')
            }

            return{
                token: this.jwtService.sign({id: user.id})
            }
        }

        async register(data: CreateUserDto){

            const creteUser = new User()
            creteUser.name = data.name
            creteUser.email = data.email
            creteUser.password = await bcrypt.hash(data.password, 10)

            const user = await this.userService.create(creteUser)

            return{
                token: this.jwtService.sign({id: user.id})
            }
        }
}