import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CalendrierCollecteDocument = CalendrierCollecte & Document;

@Schema()
export class CalendrierCollecte {
    @Prop({ required: true })
    jourCollecte: Date;

    @Prop({ required: true })
    typeDeCollecte: string;
}

export const CalendrierCollecteSchema = SchemaFactory.createForClass(CalendrierCollecte);
