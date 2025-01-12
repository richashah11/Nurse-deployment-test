"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const nurse_module_1 = require("./nurse/nurse.module");
const daatabse_module_1 = require("./infra/moongose/daatabse.module");
const config_1 = require("@nestjs/config");
const mongoose_models_module_1 = require("./schema/mongoose-models.module");
const user_module_1 = require("./user/user.module");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_service_1 = require("./jwt.config.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            jwt_1.JwtModule.registerAsync({
                useClass: jwt_config_service_1.JwtConfigService,
            }),
            jwt_1.JwtModule,
            daatabse_module_1.DatabaseModule,
            mongoose_models_module_1.MongooseModelsModule,
            nurse_module_1.NurseModule,
            user_module_1.UserModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map