import { IsString, Length,  } from "class-validator";

export class registerUserDto{

    @IsString()
    name: string

    @IsString()
    email: string;

    @IsString()
    @Length(5,12)
    password: string;
}