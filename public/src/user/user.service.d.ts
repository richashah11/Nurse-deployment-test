import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schema/user.schema';
import mongoose from 'mongoose';
import { LoginUserDto } from './dto/Login-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private UserModel;
    private jwtService;
    constructor(UserModel: mongoose.Model<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<(mongoose.Document<unknown, {}, User> & User & {
        _id: mongoose.Types.ObjectId;
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
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
