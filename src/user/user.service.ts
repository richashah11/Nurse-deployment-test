import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import mongoose from 'mongoose';
import { LoginUserDto } from './dto/Login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private UserModel: mongoose.Model<User>,
    private jwtService: JwtService, 

  ) { }

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const createdUser = new this.UserModel({
      ...createUserDto,
      password: hashedPassword,
    });

    return createdUser.save();
    return 'This action adds a new user';
  }

  async login(LoginUserDto: LoginUserDto) {

    const user: User = await this.UserModel.findOne({ email: LoginUserDto.email });
 
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(LoginUserDto.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const payload = { email: user.email };
    const token = this.jwtService.sign(payload);

    return { accessToken: token };
    return { message: 'Login successful' };
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
