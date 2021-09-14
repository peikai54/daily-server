const mysql = require("mysql");
const { dataBaseConfig } = require("./config");

const connection = mysql.createConnection(dataBaseConfig);
console.log("数据库连接成功");

export default connection;
