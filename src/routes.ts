import LoginController from "./controller/login";
import TaskController from "./controller/task";

export const withoutAuth = [
  {
    path: "/login",
    method: "post",
    action: LoginController.login,
  },
];

export default [
  {
    path: "/user-info",
    method: "get",
    action: LoginController.getUserInfo,
  },
  {
    path: "/add-task",
    method: "post",
    action: TaskController.add,
  },
];
