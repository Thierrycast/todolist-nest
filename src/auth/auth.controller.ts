import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-user.dto";
import {Request, Response} from 'express'
import { registerUserDto } from "./dto/register-user.dto";



@Controller()
export class AuthController{
    constructor(private readonly authService:AuthService){}

    @Post('/login')
    async login(@Req() req: Request,@Res() res: Response, @Body() data: LoginDto){
        try {
            
            const result = await this.authService.login(data)
            return res.status(200).json({
                status : "Ok!",
                message:"success",
                result
            })

        } catch (error) {
            return res.status(200).json({
                status : "Error!",
                message:error.message,
                
            })
        }
    }


    @Post('/register')
    async register(@Req() req: Request,@Res() res: Response, @Body() data: registerUserDto){
        try {
            
            const result = await this.authService.register(data)
            return res.status(200).json({
                status : "Ok!",
                message:"success",
                result
            })

        } catch (error) {
            return res.status(200).json({
                status : "Error!",
                message:error.message,
                
            })
        }
    }
}