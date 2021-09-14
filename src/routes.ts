import homeController from "./controller/home-controller";
import LoginController from "./controller/login";

export const withoutAuth = [
  {
    path: "/login",
    method: "post",
    action: LoginController.login,
  },
];

export default [
  {
    path: "/",
    method: "get",
    action: homeController.hello,
  },

  {
    path: "/auth",
    method: "get",
    action: LoginController.auth,
  },
];
