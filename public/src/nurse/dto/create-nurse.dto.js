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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNurseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateNurseDto {
}
exports.CreateNurseDto = CreateNurseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'The name of the nurse',
        example: 'Darlene Kirk',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNurseDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        description: 'The email address of the nurse',
        example: 'kramerrachel@gmail.com',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNurseDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)(null, { message: 'Phone number must be valid' }),
    (0, swagger_1.ApiProperty)({
        description: 'The phone number of the nurse',
        example: '256.061.8936x7225',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNurseDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'joinDate must be a valid ISO date string' }),
    (0, swagger_1.ApiProperty)({
        description: 'The date the nurse joined',
        example: '2023-11-02',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNurseDto.prototype, "joinDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'licenseExpiryDate must be a valid ISO date string' }),
    (0, swagger_1.ApiProperty)({
        description: 'The date the nurse’s license expires',
        example: '2025-10-06',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNurseDto.prototype, "licenseExpiryDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'The status of the nurse (e.g., active, inactive)',
        example: 'active',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNurseDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'The URL to the nurse’s document',
        example: 'http://hansen-johnson.com//uploads/with.pdf',
        required: true,
    }),
    __metadata("design:type", String)
], CreateNurseDto.prototype, "documentURL", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        description: 'Whether the nurse has a digital signature',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], CreateNurseDto.prototype, "digitalSignature", void 0);
//# sourceMappingURL=create-nurse.dto.js.map