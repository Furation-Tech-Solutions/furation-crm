import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Response } from 'express';
import { Repository } from 'typeorm';

import { GoogleRequest } from 'src/core/auth/strategies/google.auth.strategy';
import { TokenService } from 'src/core/auth/services/token.service';
import { User } from 'src/core/user/user.entity';
import { Workspace } from 'src/core/workspace/workspace.entity';
import { AuthService } from 'src/core/auth/services/auth.service';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { GoogleGmailProviderEnabledGuard } from 'src/core/auth/guards/google-gmail-provider-enabled.guard';
import { GoogleGmailOauthGuard } from 'src/core/auth/guards/google-gmail-oauth.guard';

@Controller('auth/google-gmail')
export class GoogleGmailAuthController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly environmentService: EnvironmentService,
    private readonly typeORMService: TypeORMService,
    private readonly authService: AuthService,
    @InjectRepository(Workspace, 'core')
    @InjectRepository(User, 'core')
    private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  @UseGuards(GoogleGmailProviderEnabledGuard, GoogleGmailOauthGuard)
  async googleAuth() {
    // As this method is protected by Google Auth guard, it will trigger Google SSO flow
    return;
  }

  @Get('redirect')
  @UseGuards(GoogleGmailProviderEnabledGuard, GoogleGmailOauthGuard)
  async googleAuthRedirect(@Req() req: GoogleRequest, @Res() res: Response) {
    return;
  }
}