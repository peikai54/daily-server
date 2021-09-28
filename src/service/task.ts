import { ITaskListReq, ITastAddReq } from "src/controller/types/task";
import TaskModel from "src/model/task";
import * as _ from "lodash";

export default class TaskService {
  add = async (props: ITastAddReq) => {
    try {
      await TaskModel.add(props);
      return {};
    } catch (error) {
      throw error;
    }
  };

  list = async (props: ITaskListReq) => {
    try {
      const data = TaskModel.list(props);
      return data;
    } catch (error) {
      throw error;
    }
  };

  taskTypeList = async () => {
    try {
      const data = await TaskModel.taskTypeList();
      const result = _.uniqWith(data, _.isEqual);
      return result;
    } catch (error) {
      throw error;
    }
  };

  targetList = async () => {
    try {
      const data = await TaskModel.targetList();
      const result = _.uniqWith(data, _.isEqual);
      return result;
    } catch (error) {
      throw error;
    }
  };
}
