import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'This action create a song';
  }
  @Get()
  findAll() {
    return 'This action returns all songs';
  }
  @Get(':id')
  findOne() {
    return 'This action return a single song';
  }
  @Put(':id')
  update() {
    return 'This action update a song';
  }
  @Delete(':id')
  delete() {
    return 'This action delete a song';
  }
}
