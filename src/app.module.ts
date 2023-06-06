import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
require('dotenv').config();
@Module({
  imports: [TypeOrmModule.forRoot(
    {
    type: 'postgres',
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER_NAME,
    password: process.env.PASWORD_DB,
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  }
  ), UsersModule, RolesModule, AuthModule,

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
