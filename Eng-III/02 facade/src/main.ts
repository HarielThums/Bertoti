import { Login } from './auth/login';
import { Find } from './users/find';
import { FindById } from './users/find.by.id';

class Main {
  login = new Login();
  find = new Find();
  findById = new FindById();

  async execute() {
    await this.login.execute('foo', 'foo');

    await this.findById.execute(1);

    await this.find.execute();
  }
}

new Main().execute();
