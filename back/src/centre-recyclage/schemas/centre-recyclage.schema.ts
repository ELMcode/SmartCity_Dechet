import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CentreDeRecyclageDocument = CentreDeRecyclage & Document;

@Schema()
export class CentreDeRecyclage {
    @Prop({ required: true })
    emplacement: string[];

    @Prop({ required: true })
    centreRecyclage: string;

    @Prop()
    horaires?: string;
}

export const CentreDeRecyclageSchema = SchemaFactory.createForClass(CentreDeRecyclage);
