import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { SessionAuthGuard } from 'src/guards/session-auth.guard';
import { CreateFollowUpDto } from 'src/follow-up/dto/create-follow-up.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  
  @Post()
  @UseGuards(SessionAuthGuard)
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Post('add-follow-up')
  @UseGuards(SessionAuthGuard)
  async addFollowUp(@Body() addFollowUpDto: { rut: string, follow_up: CreateFollowUpDto }) {
    return this.studentService.addFollowUp(addFollowUpDto.rut, addFollowUpDto.follow_up);
  }

  @Get(':rut/follow-ups')
  @UseGuards(SessionAuthGuard)
  async getFollowUps(@Param('rut') rut: string) {
    return this.studentService.getFollowUps(rut);
  }

  @Get()
  @UseGuards(SessionAuthGuard)
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
