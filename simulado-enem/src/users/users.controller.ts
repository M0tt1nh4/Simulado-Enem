import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from "@nestjs/common";
import { UserService } from "./users.service";
import { User as UserModel } from "@prisma/client";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('users')
    async getUsers(): Promise<UserModel[]> {
        return this.userService.users({});
    }

    @Get('user/:id')
    async getUserById(@Param('id') id: string): Promise<UserModel | null> {
        return this.userService.user({ idUsuario: id });
    }

    @Post('user')
    async signupUser(@Body() userData: UserModel): Promise<UserModel> {
        return this.userService.createUser(userData);
    }

    @Delete('user/:id')
    async deleteUser(@Param('id') id: string): Promise<UserModel> {
        return this.userService.deleteUser({ idUsuario: id })
    }
}