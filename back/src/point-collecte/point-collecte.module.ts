import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PointDeCollecte, PointDeCollecteSchema } from './schemas/point-collecte.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: PointDeCollecte.name, schema: PointDeCollecteSchema }]),
    ],
})
export class PointDeCollecteModule {}
