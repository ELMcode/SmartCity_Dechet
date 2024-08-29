import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/smart-city'),
    AuthModule,
    UsersModule,
    // CalendrierCollecteModule,
    // PointDeCollecteModule,
    // CentreDeRecyclageModule,
  ],
})
export class AppModule {}
