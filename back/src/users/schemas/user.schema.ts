import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    nom: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    adresse: string;

    @Prop()
    telephone?: string;

    @Prop({ default: 0 })
    pointsAccumule: number;

    @Prop({ default: false })
    admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Hash du password avant le save
UserSchema.pre('save', async function (next) {
    const user = this as UserDocument;
    if (!user.isModified('password')) return next();
    const bcrypt = require('bcryptjs');
    user.password = await bcrypt.hash(user.password, 10);
    next();
});
