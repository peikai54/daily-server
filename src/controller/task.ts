import { ITastAddReq } from "./types/task";
import TaskService from "src/service/task";
import { wrapSuccess } from "src/utils/route";

class TaskController {
  private taskService = new TaskService();

  add = async (ctx) => {
    const params: ITastAddReq = ctx.request.body;
    const data = await this.taskService.add(params);
    ctx.body = wrapSuccess(data);
  };
}

export default new TaskController();
