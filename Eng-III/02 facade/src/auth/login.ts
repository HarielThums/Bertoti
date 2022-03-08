import { Database } from '../database/database';

export class Login {
  database = new Database();

  async execute(name: string, password: string) {
    const user = await this.database.findUserByName(name);

    if (user.password !== password) throw new Error('invalid login password');

    console.log('login: ', { token: Math.random() });
  }
}
