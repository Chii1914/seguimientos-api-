import { Module } from '@nestjs/common';
import { FollowUpService } from './follow-up.service';
import { FollowUpController } from './follow-up.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowUp, FollowUpSchema } from './schema/follow-up.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: FollowUp.name, schema: FollowUpSchema }])],
  controllers: [FollowUpController],
  providers: [FollowUpService],
  exports: [FollowUpService, MongooseModule.forFeature([{ name: FollowUp.name, schema: FollowUpSchema }])],
})
export class FollowUpModule { }
