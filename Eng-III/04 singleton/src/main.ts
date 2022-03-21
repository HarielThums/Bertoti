import { Database } from './database';

class Main {
  async execute() {
    const db1 = Database.getInstance('db1');
    const db2 = Database.getInstance('db2');

    console.log(db1);
    console.log(db2);

    if (db1 === db2) {
      console.log(`It's the same instances`);
    } else {
      console.log(`It's not the same instances`);
    }
  }
}

new Main().execute();
