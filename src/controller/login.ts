import { decodeToken } from "src/util";
import LoginService from "../service/login";

class LoginController {
  private service = new LoginService();

  login = async (ctx) => {
    const data = ctx.request.body;
    if (!data.username || !data.password) {
      ctx.body = "请输入用户名与密码";
      return;
    } else {
      const token = await this.service.login(data.username);
      ctx.body = {
        token,
      };
      return;
    }
  };

  auth = async (ctx) => {
    const token = ctx.headers["authorization"];
    ctx.body = "success";
    try {
      const data = decodeToken(token);
      console.log(data);
    } catch (error) {
      console.log("catch you");
    }
  };
}

export default new LoginController();
