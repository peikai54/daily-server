import LoginController from "./controller/login";
import TaskController from "./controller/task";

export const withoutAuth = [
  {
    path: "/login",
    method: "post",
    action: LoginController.login,
  },
  {
    path: "/task-type-list",
    method: "get",
    action: TaskController.taskTypeList,
  },
  {
    path: "/target-list",
    method: "get",
    action: TaskController.targetList,
  },
];

export default [
  {
    path: "/user-info",
    method: "get",
    action: LoginController.getUserInfo,
  },
  {
    path: "/task-list",
    method: "get",
    action: TaskController.list,
  },
  {
    path: "/add-task",
    method: "post",
    action: TaskController.add,
  },
];
