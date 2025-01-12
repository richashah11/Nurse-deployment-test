import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class JwtConfigService implements JwtOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions>;
}
