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
exports.NurseController = void 0;
const common_1 = require("@nestjs/common");
const nurse_service_1 = require("./nurse.service");
const update_nurse_dto_1 = require("./dto/update-nurse.dto");
const swagger_1 = require("@nestjs/swagger");
const Excel_nurse_data_dto_1 = require("./dto/Excel-nurse-data.dto");
let NurseController = class NurseController {
    constructor(nurseService) {
        this.nurseService = nurseService;
    }
    async create(AddAllNurseDto) {
        return this.nurseService.AddExcelNurseData(AddAllNurseDto);
    }
    findAll() {
        return this.nurseService.findAll();
    }
    findOne(id) {
        return this.nurseService.findOne(+id);
    }
    update(id, updateNurseDto) {
        return this.nurseService.update(+id, updateNurseDto);
    }
    remove(id) {
        return this.nurseService.remove(+id);
    }
};
exports.NurseController = NurseController;
__decorate([
    (0, swagger_1.ApiTags)('AddExcelDataNurse'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Excel_nurse_data_dto_1.AddTotalNurseDataDto]),
    __metadata("design:returntype", Promise)
], NurseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NurseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NurseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_nurse_dto_1.UpdateNurseDto]),
    __metadata("design:returntype", void 0)
], NurseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NurseController.prototype, "remove", null);
exports.NurseController = NurseController = __decorate([
    (0, common_1.Controller)('nurse'),
    __metadata("design:paramtypes", [nurse_service_1.NurseService])
], NurseController);
//# sourceMappingURL=nurse.controller.js.map