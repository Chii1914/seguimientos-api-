import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { FollowUpModule } from './follow-up/follow-up.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/roles/roles.guard';
import { DocsModule } from './docs/docs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_HOST'),
      }),
      inject: [ConfigService],
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY, 
      signOptions: { expiresIn: '60m' },
    }),
    UserModule,
    FollowUpModule,
    StudentModule,
    AuthModule,
    DocsModule,
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})


export class AppModule {}
