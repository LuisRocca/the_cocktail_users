import { EntityRepository, Repository } from 'typeorm';
import { Users } from './entities/user.entity';
@EntityRepository(Users)
export class UserRepository extends Repository<Users> {}