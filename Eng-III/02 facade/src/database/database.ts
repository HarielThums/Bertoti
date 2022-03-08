const users = [
  { id: 1, name: 'foo', password: 'foo' },
  { id: 2, name: 'bar', password: 'bar' },
];

export class Database {
  async findUserById(id: number) {
    return users.find((user) => user.id === id);
  }

  async findUserByName(name: string) {
    return users.find((user) => user.name === name);
  }

  async findUsers() {
    return users;
  }
}
