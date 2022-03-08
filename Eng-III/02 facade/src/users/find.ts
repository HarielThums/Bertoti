import { Database } from '../database/database';

export class Find {
  database = new Database();

  async execute() {
    const users = await this.database.findUsers();

    console.log('find users: ', users);
  }
}
