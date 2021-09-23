export const connectionName = "conn";
import { Users } from "src/entities/user";
import { Task } from "src/entities/task";

export const dataBaseConfig = {
  type: "mysql",
  name: connectionName,
  host: "localhost",
  username: "root",
  port: "3306",
  password: "123456",
  database: "daily",
  entities: [Users, Task],
};

export const secretKey = "key";
