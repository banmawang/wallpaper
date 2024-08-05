import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { resolve } from 'path';
import _ from 'lodash';
import { Response } from 'express';
import { readdir, readFile } from 'fs/promises';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Res() res: Response) {
    const files = await readdir(resolve(__dirname, '..', 'wallpaper'));

    const file = await readFile(
      resolve(__dirname, '../wallpaper', files[_.random(files.length - 1)]),
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        res.type('image/jpeg');
        resolve(res.send(file));
      }, 2000);
    });

    // return (
    //   'http://localhost:3000/wallpaper/' + files[_.random(files.length - 1)]
    // );
  }
}
