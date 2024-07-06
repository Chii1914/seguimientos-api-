import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UserModule } from 'src/user/user.module';
import { Mongoose } from 'mongoose';
import { Student, StudentSchema } from './schema/Student.schema';
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
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService, MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])]
})
export class StudentModule { }
