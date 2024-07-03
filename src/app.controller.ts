import { Controller, Get, Inject, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserVerifyDto } from './dto/userVerify.dto';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly jwtService: JwtService) { }

  @MessagePattern('verify')
  async verifyUser(userVerifyDto: UserVerifyDto) {
    // console.log("run")

    try {
      const { token, key } = userVerifyDto;
      const userInfo = await this.jwtService.verify(token, { secret: key });
      return userInfo;
    }
    catch (error) {
      throw new UnauthorizedException();
    }
  }
}
