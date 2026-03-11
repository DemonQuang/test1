import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './passport/jwt-auth.guard';
import { Public } from '@/decorator/customize';
import { CreateAuthDto } from './dto/create-auth.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailerService: MailerService) { }

  @Post("login")
  @Public()
  @UseGuards(AuthGuard("local"))
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }
  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Post("register")
  @Public()
  register(@Body() registerDto: CreateAuthDto) {
    return this.authService.handleRegister(registerDto);
  }

  @Get("mail")
  @Public()
  async testMail() {
    await this.mailerService.sendMail({
      to: "marin241104@gmail.com",
      subject: "Welcome to NestJS",
      text: "welcome to nestjs",
      template: "register",
      context: {
        name: "John Doe",
        activationCode: "12345678",
      },
    });

    return "ok";
  }
}