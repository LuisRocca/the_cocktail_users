import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '123456',
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
