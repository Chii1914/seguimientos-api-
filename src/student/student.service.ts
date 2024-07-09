import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from '../student/schema/Student.schema';
import { FollowUp } from 'src/follow-up/schema/follow-up.schema';
import { CreateFollowUpDto } from 'src/follow-up/dto/create-follow-up.dto';

@Injectable()
export class StudentService {

  constructor(@InjectModel('Student') private studentModel: Model<Student>) { }

  //constructor(@InjectModel('User') private userModel: Model<User>) {}
  async create(createStudentDto: CreateStudentDto) {
    return await this.studentModel.create(createStudentDto);
  }

  async findAll() {
    return await this.studentModel.find();
  }

  async addFollowUp(id: string, followUpDto: CreateFollowUpDto): Promise<Student> {
    const student = await this.studentModel.findById(id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    
    student.follow_ups.push(followUpDto);
    return student.save();
  }

  async getFollowUps(rut: string): Promise<FollowUp[]> {
    const student = await this.studentModel.findOne({ rut }).exec();
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student.follow_ups;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
