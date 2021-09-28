import { connectionName } from "src/config";
import { ITaskListReq, ITastAddReq } from "src/controller/types/task";
import { Task } from "src/entities/task";
import { getConnection } from "typeorm";
import { taskQuery } from "./util/task";

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

  list = async (props: ITaskListReq) => {
    try {
      const conn = getConnection(connectionName);
      let queryBuilder = conn
        .createQueryBuilder()
        .from(Task, "task")
        .select(["task"]);
      queryBuilder = taskQuery(queryBuilder, props);
      const data = await queryBuilder.getMany();
      return data;
    } catch (error) {
      throw error;
    }
  };

  taskTypeList = async () => {
    try {
      const conn = getConnection(connectionName);
      const data = await conn
        .createQueryBuilder()
        .from(Task, "task")
        .select(["task.type"])
        .getMany();
      return data;
    } catch (error) {
      throw error;
    }
  };

  targetList = async () => {
    try {
      const conn = getConnection(connectionName);
      const data = await conn
        .createQueryBuilder()
        .from(Task, "task")
        .select(["task.target"])
        .getMany();
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default new TaskModel();
