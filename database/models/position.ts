import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

export enum Status {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED'
}

export enum Side {
    BUY = 'BUY',
    SELL = 'SELL'
}

@modelOptions({
    schemaOptions: { collection: 'positions', versionKey: false },
    options: { allowMixed: 0 }
})
export class Position {
    @prop({ required: true, type: Number, min: 0 })
    public quantity!: number

    @prop({ required: true, type: Number, min: 0 })
    public entryPrice!: number

    @prop({ type: Number, min: 0 })
    public exitPrice?: number

    @prop({ required: true, enum: Status })
    public status!: Status

    @prop({ required: true, enum: Side })
    public side!: Side

    @prop({ required: true })
    public baseCurrency!: string

    @prop({ required: true })
    public quoteCurrency!: string
}

export const PositionModel = getModelForClass(Position)
