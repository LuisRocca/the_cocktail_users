export class User {}
import { DefaultValuePipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
TypeOrmModule.forRoot()
@Entity()
export class Users {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nick_name: String;

    @Column()
    email: String;

    @Column()
    password: String;

    @Column()
    id_rol: number;
    
    @Column({ default: true })
    is_active: Boolean;

}