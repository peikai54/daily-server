import { connectionName } from "src/config";
import { Users } from "src/entities/user";
import { getConnection } from "typeorm";
class UserModel {
  login = async (username: string, password: string) => {
    const conn = getConnection(connectionName);
    const data = await conn
      .createQueryBuilder()
      .select("users")
      .from(Users, "users")
      .getOne();
    try {
      const result = JSON.parse(JSON.stringify(data));
      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default new UserModel();
