import { createConnection } from 'typeorm';

async function databaseMigrations() {
  try {
    const dbConnection = await createConnection({
      "name": "default",
      "type": "mariadb",
      "host": "localhost",
      "port": 3306,
      "username": "test",
      "password": "test",
      "database": "test",
      "synchronize": true,
      "logging": false,
      "entities": [
        "src/entity/*.js"
      ],
      "subscribers": [
        "src/subscriber/*.js"
      ],
      "migrations": [
        "src/migration/*.ts"
      ],
      "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
      }
    });
    console.log(await dbConnection.showMigrations())
    await dbConnection.runMigrations().then(() => {
      // tslint:disable-next-line: no-console
      console.log('MIGRATION SUCCESS');
      process.exit(0);
    });
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log('DATABASE MIGRATION ERROR', error);
    process.exit(1);
  }
}

databaseMigrations();

// runMigration();
