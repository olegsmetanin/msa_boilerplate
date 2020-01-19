import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { PostCreate, PostCreateType } from '@msa/posts-api'

@Controller('api')
export class APIController {

    @Post()
    private async postMessage(req: Request, res: Response) {
        var msg = 'None'
        switch (req.body.type) {
            case PostCreateType: {
                msg = "YES"
            }
        }

        res.status(200).json({
            message: msg,
        });
    }
}