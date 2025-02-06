import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('this is viki song');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
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
