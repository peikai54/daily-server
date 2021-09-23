export const connectionName = "conn";
import { Users } from "src/entities/user";

export const dataBaseConfig = {
  type: "mysql",
  name: connectionName,
  host: "localhost",
  username: "root",
  port: "3306",
  password: "123456",
  database: "daily",
  entities: [Users],
};

export const secretKey = "key";
