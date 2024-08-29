import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalendrierCollecte, CalendrierCollecteSchema } from './schemas/calendrier-collecte.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: CalendrierCollecte.name, schema: CalendrierCollecteSchema }]),
    ],
})
export class CalendrierCollecteModule {}
