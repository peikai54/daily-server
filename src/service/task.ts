import { ITastAddReq } from "src/controller/types/task";
import TaskModel from "src/model/task";

export default class TaskService {
  add = async (props: ITastAddReq) => {
    try {
      await TaskModel.add(props);
      return {};
    } catch (error) {
      console.log(error);
    }
  };
}
