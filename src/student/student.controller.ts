import { UploadedFiles, Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Res } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { SessionAuthGuard } from 'src/guards/session-auth.guard';
import { CreateFollowUpDto } from 'src/follow-up/dto/create-follow-up.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';


@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  //@UseGuards(SessionAuthGuard)
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  
  @Post('files/:id')
  //@UseGuards(SessionAuthGuard)
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFiles(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.studentService.saveStudentFiles(id, files);
  }
  @Post('add-follow-up')
  //@UseGuards(SessionAuthGuard)
  async addFollowUp(@Body() addFollowUpDto: { id: string, follow_up: CreateFollowUpDto }) {
    return this.studentService.addFollowUp(addFollowUpDto.id, addFollowUpDto.follow_up);
  }

  @Get(':id/follow-ups')
  //@UseGuards(SessionAuthGuard)
  async getFollowUps(@Param('id') id: string) {
    return this.studentService.getFollowUps(id);
  }

  @Get(':id/filenames')
  async getFilenames(@Param('id') id: string) {
    return this.studentService.getFilenames(id);
  }

  @Get('download/:id/:filename')
  async getFile(
    @Param('id') id: string,
    @Param('filename') filename: string,
    @Res() res: Response
  ) {
    const file = await this.studentService.getFile(id, filename);
  
    // Setting the appropriate headers for file download
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${filename}"`,
    });
  
    // Stream the file to the response
    res.send(file);
  }

  @Get()
  //@UseGuards(SessionAuthGuard)
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
