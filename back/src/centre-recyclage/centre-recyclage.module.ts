import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CentreDeRecyclage, CentreDeRecyclageSchema } from './schemas/centre-recyclage.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: CentreDeRecyclage.name, schema: CentreDeRecyclageSchema }]),
    ],
})
export class CentreDeRecyclageModule {}
