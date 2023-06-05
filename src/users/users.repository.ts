import { EntityRepository, Repository } from 'typeorm';
import { Users } from './entities/User.entity';
@EntityRepository(Users)
export class UserRepository extends Repository<Users> {}