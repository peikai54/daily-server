import { decodeToken } from "src/utils/token";
import LoginService from "../service/login";

class LoginController {
  private service = new LoginService();

  // 登录
  login = async (ctx) => {
    const data = ctx.request.body;
    if (!data.username || !data.password) {
      ctx.body = "请输入用户名与密码";
      return;
    } else {
      const result = await this.service.login(data.username, data.password);
      ctx.body = result;
      if (result.code === 0) {
        ctx.cookies.set("jwt", result.token, { maxAge: 24 * 60 * 60 * 1000 });
      }
      return;
    }
  };

  // 鉴权测试
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
