import { createConnection } from "typeorm";
const { dataBaseConfig } = require("./config");

const loading = async () => {
  try {
    await createConnection(dataBaseConfig);
    console.log("数据库连接成功");
  } catch (error) {
    console.log(error);
  }
};

export default loading;
