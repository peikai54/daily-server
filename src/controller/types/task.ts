export interface ITastAddReq {
  task_name: string;
  start_time: number;
  end_time: number;
  state: number;
  creater: string;
  type: string;
  target: string;
}
