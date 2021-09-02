import homeController from "./controller/home-controller";
import LoginController from "./controller/login";

export default [
  {
    path: "/",
    method: "get",
    action: homeController.hello,
  },
  {
    path: "/login",
    method: "get",
    action: LoginController.login,
  },
  {
    path: "/auth",
    method: "get",
    action: LoginController.auth,
  },
];
