import * as validators from '../validators/position'
import { validate } from '../helpers/validator'
import * as types from '../types/position'

import { Position, PositionModel } from '../../database/models/position'

import { ErrorHelper } from '../helpers/error'
import { getModelName } from '../helpers/filename'
import { filter, rename } from '../helpers/filter'

const errorHelper = new ErrorHelper(getModelName(__filename))

export async function createPosition(params: any): Promise<{ result: Position }> {
    const value = validate(params, validators.createPosition) as types.createPosition

    const result = (await PositionModel.create(value)) as Position
    errorHelper.createError(result)

    return { result: result }
}

export async function updatePosition(params: any): Promise<{ result: boolean }> {
    const value = rename(validate(params, validators.updatePosition), 'id', '_id') as types.updatePosition

    const result = await PositionModel.updateOne({ _id: value.id }, value.position, { new: true })
    errorHelper.updateError(result)

    return { result: result.modifiedCount > 0 }
}

export async function deletePosition(params: any): Promise<{ result: true }> {
    const value = rename(validate(params, validators.deletePosition), 'id', '_id') as types.deletePosition

    const result = await PositionModel.deleteOne(value)
    console.log(result)

    errorHelper.deleteError(result)
    return { result: true }
}

export async function queryPosition(params: any): Promise<{ result: Position }> {
    const value = rename(validate(params, validators.getPosition), 'id', '_id') as types.getPosition

    const result = (await PositionModel.findOne(value)) as Position
    errorHelper.getError(result)

    return { result: result }
}

export async function queryPositions(params: any): Promise<{ result: Position[] }> {
    const value = rename(validate(params, validators.getPositions), 'id', '_id') as types.getPositions

    const result = (await PositionModel.find(value)) as Position[]
    errorHelper.getAllError(result)

    return { result: result }
}
