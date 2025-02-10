/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
export interface Song {
  title: string;
  artists: string[];
  releasedDate: Date;
  duration: Date;
}
@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];
  create(song: Song): Song[] {
    this.songs.push(song);
    return this.songs;
  }
  findAll(): Song[] {
    //error comes from db while fetching the data
    // throw new Error('Parameter is not a number!');
    return this.songs;
  }
}
