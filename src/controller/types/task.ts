export interface ITastAddReq {
  task_name: string;
  start_time: number;
  end_time: number;
  state: number;
  creater: string;
  type: string;
  target: string;
}

export interface ITaskListReq {
  task_name?: string;
  state?: number;
  creater?: string;
  type?: string;
  target?: string;
  start_range?: string;
  end_range?: string;
  size?: number;
  index?: number;
}
