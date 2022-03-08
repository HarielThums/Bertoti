import { Database } from '../database/database';

export class FindById {
  database = new Database();

  async execute(id: number) {
    const findUser = await this.database.findUserById(id);

    console.log('find user by id: ', findUser);
  }
}
