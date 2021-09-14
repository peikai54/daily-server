import conn from "src/loading";

class UserModel {
  login = async (username: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`,
        function (err, rows) {
          if (err) {
            reject(err);
          }
          try {
            const result = JSON.parse(JSON.stringify(rows));
            return resolve(result);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  };
}

export default new UserModel();
