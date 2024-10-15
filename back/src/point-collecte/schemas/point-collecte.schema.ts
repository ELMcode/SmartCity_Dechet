import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PointDeCollecteDocument = PointDeCollecte & Document;

@Schema()
export class PointDeCollecte {
    @Prop({ required: true })
    typeDuDechet: string[];

    @Prop({ default: false })
    pleine: boolean;

    @Prop({ required: true })
    emplacement: string[];

    @Prop({ type: [String] })
    signalements: string[];
}

export const PointDeCollecteSchema = SchemaFactory.createForClass(PointDeCollecte);
