const mysql = require("mysql");
const { dataBaseConfig } = require("./config");

const connection = mysql.createConnection(dataBaseConfig);

export default connection;
