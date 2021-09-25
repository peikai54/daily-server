import { ITastAddReq } from "src/controller/types/task";
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

  taskTypeList = async () => {
    try {
      const result = await TaskModel.taskTypeList();
      return result;
    } catch (error) {
      throw error;
    }
  };

  targetList = async () => {
    try {
      const result = await TaskModel.targetList();
      return _.uniq(result);
    } catch (error) {
      throw error;
    }
  };
}
