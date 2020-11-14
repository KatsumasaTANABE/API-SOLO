import { createConnection, ConnectionOptions } from "typeorm";

class DatabaseConnectionManager {
  public static async connect() {
    const connection = await createConnection();
    return connection;
  }
}
export default DatabaseConnectionManager;
