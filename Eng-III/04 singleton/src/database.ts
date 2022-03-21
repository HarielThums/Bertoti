export class Database {
  private static database: Database;
  private exemple: string;

  private constructor(exemple: string) {
    this.exemple = exemple;
  }

  static getInstance(exemple: string): Database {
    if (this.database) {
      return this.database;
    } else {
      this.database = new Database(exemple);

      return this.database;
    }
  }
}
