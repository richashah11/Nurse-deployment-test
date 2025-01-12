import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/Login-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<(import("mongoose").Document<unknown, {}, import("../schema/user.schema").User> & import("../schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | "This action adds a new user">;
    login(LoginUserDto: LoginUserDto): Promise<{
        accessToken: string;
        message?: undefined;
    } | {
        message: string;
        accessToken?: undefined;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
