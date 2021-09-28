import { ITaskListReq } from "@src/controller/types/task";
import { getDataFromRange } from "@src/utils/task";
import { Task } from "src/entities/task";
import { SelectQueryBuilder } from "typeorm";

export const taskQuery = (
  queryBuilder: SelectQueryBuilder<Task>,
  selector: ITaskListReq
) => {
  if (selector.task_name) {
    queryBuilder = queryBuilder.where("task.task_name like :task_name", {
      task_name: `%${selector.task_name}%`,
    });
  }
  if (selector.creater) {
    queryBuilder = queryBuilder.where("task.creater like :create", {
      creater: `%${selector.creater}%`,
    });
  }
  if (selector.state) {
    queryBuilder = queryBuilder.where("task.state = :state", {
      state: selector.state,
    });
  }
  if (selector.type) {
    queryBuilder = queryBuilder.where("task.type = :type", {
      type: selector.type,
    });
  }
  if (selector.target) {
    queryBuilder = queryBuilder.where("task.target = :target", {
      target: selector.target,
    });
  }
  if (selector.start_range) {
    const { start, end } = getDataFromRange(selector.start_range);
    queryBuilder = queryBuilder
      .where("task.start_time >= :start", { start })
      .andWhere("task.start_time <= :end", { end });
  }
  if (selector.end_range) {
    const { start, end } = getDataFromRange(selector.end_range);
    queryBuilder = queryBuilder
      .where("task.end_time >= :start", { start })
      .andWhere("task.end_time <= :end", { end });
  }
  return queryBuilder;
};
