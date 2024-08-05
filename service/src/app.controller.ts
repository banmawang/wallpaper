import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';
import _ from 'lodash';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    const files = readdirSync(resolve(__dirname, '..', 'wallpaper'));

    const file = readFileSync(
      resolve(__dirname, '..', 'wallpaper', files[_.random(files.length - 1)]),
    );
    res.type('image/jpeg');
    return res.send(file);

    // return (
    //   'http://localhost:3000/wallpaper/' + files[_.random(files.length - 1)]
    // );
  }
}
