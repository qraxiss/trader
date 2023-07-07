import * as error from '../../errors/errors'
import * as positionLogic from '../../logic/models/position'
import { ahandler } from '../../errors/handle'

import { Request, NextFunction, Response } from 'express'

export class PositionController {
    @ahandler
    static async createPosition(req: Request, res: Response, next: NextFunction) {
        let result = await positionLogic.createPosition(req.body)
        return res.json(result)
    }

    @ahandler
    static async updatePosition(req: Request, res: Response, next: NextFunction) {
        let result = await positionLogic.updatePosition(req.body)
        return res.json(result)
    }

    @ahandler
    static async deletePosition(req: Request, res: Response, next: NextFunction) {
        let result = await positionLogic.deletePosition(req.body)
        return res.json(result)
    }

    @ahandler
    static async queryPosition(req: Request, res: Response, next: NextFunction) {
        let result = await positionLogic.queryPosition(req.query)
        return res.json(result)
    }

    @ahandler
    static async queryPositions(req: Request, res: Response, next: NextFunction) {
        let result = await positionLogic.queryPositions(req.query)
        return res.json(result)
    }
}
