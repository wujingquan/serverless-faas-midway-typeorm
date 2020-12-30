import { Config, Provide } from "@midwayjs/decorator";
import {
  createConnection,
  ConnectionOptions,
  getConnection,
  getConnectionManager,
} from "typeorm";
import { DatabaseInterface } from "./interface/database";

@Provide("Database")
export class Database implements DatabaseInterface {
  @Config("orm")
  dbConfig: ConnectionOptions;

  async connect(): Promise<void> {
    try {
      if (!getConnectionManager().has("default")) {
        console.info(`ConnectionManager:${false}`);

        await createConnection({
          ...this.dbConfig,
          entities: [__dirname + "/entity/{*.js,*.ts}"],
        });
      } else {
        console.info(`ConnectionManager:${true}`);
      }
    } catch (error) {
      error.message = `DB connection error: ${error.message}`;

      throw error;
    }
  }

  async close(): Promise<void> {
    await getConnection().close();
  }
}
