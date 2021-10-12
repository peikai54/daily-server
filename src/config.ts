export const connectionName = "conn";
import { Users } from "src/entities/user";
import { Task } from "src/entities/task";

const { DailyEnv } = process.env;

if (DailyEnv === "0") {
  console.log("连接本地开发数据库");
} else {
  console.log("连接服务器在线数据库");
}

export const dataBaseConfig =
  DailyEnv === "0"
    ? {
        type: "mysql",
        name: connectionName,
        host: "localhost",
        username: "root",
        port: "3306",
        password: "123456",
        database: "daily",
        entities: [Users, Task],
      }
    : {
        type: "mysql",
        name: connectionName,
        host: "120.24.61.236",
        username: "root",
        port: "3306",
        password: "123456",
        database: "daily",
        entities: [Users, Task],
      };

export const secretKey = "key";
