import { connectionName } from "src/config";
import { ILoginReq } from "src/controller/types/login";
import { Users } from "src/entities/user";
import { getConnection } from "typeorm";

class UserModel {
  login = async (props: ILoginReq) => {
    try {
      const conn = getConnection(connectionName);
      const data = await conn
        .createQueryBuilder()
        .select("users")
        .from(Users, "users")
        .getOne();
      const result = JSON.parse(JSON.stringify(data));
      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default new UserModel();
