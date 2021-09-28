import { connectionName } from "src/config";
import { ILoginReq } from "src/controller/types/login";
import { Users } from "src/entities/user";
import { getConnection, SelectQueryBuilder } from "typeorm";

class UserModel {
  login = async (props: ILoginReq) => {
    try {
      const conn = getConnection(connectionName);
      const data = await conn
        .createQueryBuilder()
        .select("users")
        .where("users.username = :name", { name: props.username })
        .andWhere("users.password = :password", { password: props.password })
        .from(Users, "users")
        .getOne();
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default new UserModel();
