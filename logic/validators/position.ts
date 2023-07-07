import * as Joi from 'joi'

import { joiObjectId } from 'ts-joi-objectid'

const objectId = joiObjectId(Joi)

export const createPosition = Joi.object({
    quantity: Joi.number().min(0).required(),
    entryPrice: Joi.number().min(0).required(),
    exitPrice: Joi.number().min(0),
    status: Joi.string().valid('OPEN', 'CLOSED').default('OPEN'),
    side: Joi.string().valid('BUY', 'SELL').required(),
    baseCurrency: Joi.string().required(),
    quoteCurrency: Joi.string().required()
}).id('createPosition')

export const closePosition = Joi.object({
    id: Joi.string().required(),
    exitPrice: Joi.number().min(0).required()
})

export const openPosition = createPosition

export const updatePosition = Joi.object({
    id: objectId().required(),
    position: Joi.object({
        quantity: Joi.number().min(0),
        entryPrice: Joi.number().min(0),
        exitPrice: Joi.number().min(0),
        status: Joi.string().valid('OPEN', 'CLOSED'),
        side: Joi.string().valid('BUY', 'SELL'),
        baseCurrency: Joi.string(),
        quoteCurrency: Joi.string()
    })
        .or('quantity', 'entryPrice', 'exitPrice', 'status', 'side', 'baseCurrency', 'quoteCurrency')
        .required()
})

export const deletePosition = Joi.object({
    id: objectId().required()
})

export const getPosition = Joi.object({
    id: objectId(),
    baseCurrency: Joi.string(),
    quoteCurrency: Joi.string(),
    status: Joi.string().valid('OPEN', 'CLOSED'),
    side: Joi.string().valid('BUY', 'SELL')
}).or('id', 'baseCurrency', 'quoteCurrency', 'status', 'side')

export const getPositions = Joi.object({
    baseCurrency: Joi.string(),
    quoteCurrency: Joi.string(),
    status: Joi.string().valid('OPEN', 'CLOSED'),
    side: Joi.string().valid('BUY', 'SELL')
})
