import { Request, Response } from 'express'
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core'
import { PostCreate, PostCreateType, PostCreateSuccess, UnknownRequest } from '@msa/posts-api'

@Controller('api')
export class APIController {

    @Post()
    private async postMessage(req: Request, res: Response) {
        if ((req.body.type) === PostCreateType) {
            const msg_in: PostCreate = req.body
            const msg: PostCreateSuccess = {
                type: 'PostCreateSuccess',
                req_id: msg_in.req_id,
                id: 'sdfhjsdljf24243234'
            }
            res.status(200).json({
                message: msg,
            })

        } else {
            const msg_in = req.body

            const msg: UnknownRequest = {
              type: 'UnknownRequest',
              req_id: msg_in.req_id,
              error: {
                  'global': 'Request unknown'
              }
            }
            res.status(405).json({
                message: msg,
            })
        }

    }
}