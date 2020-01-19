import * as path from 'path';
import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';

@Controller('stat')
export class StatController {

    @Get()
    private getMessage(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, '../@msa/posts-srv.stats.html'))
    }

}

