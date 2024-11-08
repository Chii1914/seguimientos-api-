import { DocksService } from './docks.service';
import { DocksController } from './docks.controller';
import { Module } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import { StudentController } from '../student/student.controller';
import { UserModule } from 'src/user/user.module';
import { Mongoose } from 'mongoose';
import { Student, StudentSchema } from '../student/schema/Student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule,
    MongooseModule.forFeature([
      {
        name: Student.name,
        schema: StudentSchema
      }]
    ),
  ],
  controllers: [DocksController],
  providers: [DocksService],
})
export class DocksModule {}
