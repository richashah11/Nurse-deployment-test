"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schema/user.schema");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(UserModel, jwtService) {
        this.UserModel = UserModel;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const createdUser = new this.UserModel({
            ...createUserDto,
            password: hashedPassword,
        });
        return createdUser.save();
        return 'This action adds a new user';
    }
    async login(LoginUserDto) {
        const user = await this.UserModel.findOne({ email: LoginUserDto.email });
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
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map