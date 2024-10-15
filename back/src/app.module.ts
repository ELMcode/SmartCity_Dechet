import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { CalendrierCollecteModule } from './calendrier-collecte/calendrier-collecte.module';
import { PointDeCollecteModule } from './point-collecte/point-collecte.module';
import { CentreDeRecyclageModule } from './centre-recyclage/centre-recyclage.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/smart-city'),
    AuthModule,
    UsersModule,
    CalendrierCollecteModule,
    PointDeCollecteModule,
    CentreDeRecyclageModule,
  ],
})
export class AppModule {}
