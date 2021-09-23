import { connectionName } from "src/config";
import { ITastAddReq } from "src/controller/types/task";
import { Task } from "src/entities/task";
import { getConnection } from "typeorm";

class TaskModel {
  add = async (props: ITastAddReq) => {
    try {
      const conn = getConnection(connectionName);
      const result = await conn
        .createQueryBuilder()
        .insert()
        .into(Task)
        .values(props)
        .execute();
      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default new TaskModel();
