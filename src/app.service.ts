import { Inject, Injectable } from '@nestjs/common';
import { UserVerifyDto } from './dto/userVerify.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  @Inject() private readonly jwtService: JwtService;

  getHello(): string {
    return 'Hello World!';
  }
}
