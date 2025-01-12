"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNurseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_nurse_dto_1 = require("./create-nurse.dto");
class UpdateNurseDto extends (0, mapped_types_1.PartialType)(create_nurse_dto_1.CreateNurseDto) {
}
exports.UpdateNurseDto = UpdateNurseDto;
//# sourceMappingURL=update-nurse.dto.js.map