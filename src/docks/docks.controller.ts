import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocksService } from './docks.service';
import { CreateDockDto } from './dto/create-dock.dto';
import { UpdateDockDto } from './dto/update-dock.dto';

@Controller('docks')
export class DocksController {
  constructor(private readonly docksService: DocksService) {}

  @Post()
  create(@Body() createDockDto: CreateDockDto) {
    return this.docksService.create(createDockDto);
  }

  @Get()
  findAll() {
    return this.docksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDockDto: UpdateDockDto) {
    return this.docksService.update(+id, updateDockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docksService.remove(+id);
  }
}
