import { createConnection } from "typeorm";

import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
  NODE_ENV,
} from "../config";

import log from "../log";

const init = async () => {
  log.info("Trying to connect to database...");
  const con = await createConnection({
    type: "postgres",
    host: DATABASE_HOST,
    port: 5432,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/*.ts"],
    synchronize: false,
    logging: NODE_ENV === "production",
    dropSchema: false,
  });

  log.info("Running migrations...");
  await con.runMigrations();
};

export default init;
