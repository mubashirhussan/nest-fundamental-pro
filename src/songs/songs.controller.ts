import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Song, SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDto: CreateSongDto): Song[] {
    return this.songsService.create(createSongDto);
  }
  @Get()
  findAll(): Song[] {
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
