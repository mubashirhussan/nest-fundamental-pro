/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
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
    try {
      return this.songsService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: e },
      );
    }
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
