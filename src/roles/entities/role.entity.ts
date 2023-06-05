import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
TypeOrmModule.forRoot()
@Entity()
export class Roles {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    rol_name: String;

    @Column({ default: true })
    is_deleted: Boolean;

    @Column()
    description: String;

}
