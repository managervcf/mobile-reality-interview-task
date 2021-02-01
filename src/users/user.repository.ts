import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getUsers(): Promise<User[]> {
    const users = await this.find();
    return users;
  }

  async createUser({ name, surname, address }: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.name = name;
    newUser.surname = surname;
    newUser.address = address;

    try {
      await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return newUser;
  }
}
