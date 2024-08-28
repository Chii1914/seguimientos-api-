import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from '../student/schema/Student.schema';
import { FollowUp } from 'src/follow-up/schema/follow-up.schema';
import { CreateFollowUpDto } from 'src/follow-up/dto/create-follow-up.dto';

import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class StudentService {

  constructor(@InjectModel('Student') private studentModel: Model<Student>) { }

  private readonly uploadPath = path.join(__dirname, '..', 'public');

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentModel.create(createStudentDto);
  }

  async saveStudentFiles(id: string, files: Express.Multer.File[]) {
    try {
      const studentUploadPath = path.join(this.uploadPath, id);
      if (!fs.existsSync(studentUploadPath)) {
        fs.mkdirSync(studentUploadPath, { recursive: true });
      }
      for (const file of files) {
        const filePath = path.join(studentUploadPath, file.originalname);
        fs.writeFileSync(filePath, file.buffer);
      }
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Error saving files');
    }
    return { message: 'Student files uploaded successfully' };
  }

  async getFilenames(id: string) {
    const studentUploadPath = path.join(this.uploadPath, id);
    if (!fs.existsSync
      (studentUploadPath)) {
      throw new NotFoundException('Student not found');
    }
    return fs.readdirSync(studentUploadPath);
  }

  async getFile(id: string, filename: string) {
    if (filename == null) {
      throw new BadRequestException('Filename is required');
      
    }
    if (filename.includes('/') || filename.includes('\\')) {
      throw new BadRequestException('Invalid filename');
      
    }
    if (filename.includes('..')) {
      throw new BadRequestException('Invalid filename');

    }
    const studentUploadPath = path.join(this.uploadPath, id);
    if (!fs.existsSync(studentUploadPath)) {
      throw new NotFoundException('Student not found');
    }
    const filePath = path.join(studentUploadPath, filename);
    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('File not found');
    }
    return fs.readFileSync(filePath);
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

  async getFollowUps(id: string): Promise<FollowUp[]> {
    const student = await this.studentModel.findById(id).exec();
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student.follow_ups;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentModel.findById(id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    Object.assign(student, updateStudentDto);
    return student.save();
  }
  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
