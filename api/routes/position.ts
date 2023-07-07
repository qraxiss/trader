import { Router } from 'express'
import { PositionController } from '../controllers/position'

export const router = Router()

router.post('/', PositionController.createPosition)
router.patch('/', PositionController.updatePosition)
router.delete('/', PositionController.deletePosition)
router.get('/', PositionController.queryPosition)
router.get('/all', PositionController.queryPositions)
