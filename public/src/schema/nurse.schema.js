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
exports.NurseSchema = exports.Nurse = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Nurse = class Nurse {
};
exports.Nurse = Nurse;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Nurse.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Nurse.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Nurse.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Nurse.prototype, "joinDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Nurse.prototype, "licenseExpiryDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Nurse.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Nurse.prototype, "documentURL", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], Nurse.prototype, "digitalSignature", void 0);
exports.Nurse = Nurse = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Nurse);
exports.NurseSchema = mongoose_1.SchemaFactory.createForClass(Nurse);
//# sourceMappingURL=nurse.schema.js.map