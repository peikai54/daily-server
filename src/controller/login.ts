import { decodeToken, getTokenFromHeader } from "src/utils/token";
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
        ctx.cookies.set("jwt", result.token, {
          maxAge: 10 * 24 * 60 * 60 * 1000,
          httpOnly: false,
        });
      }
      return;
    }
  };

  // 获取userInfo
  getUserInfo = async (ctx) => {
    const token = getTokenFromHeader(ctx);
    const data = decodeToken(token);
    ctx.body = { username: data.username };
  };
}

export default new LoginController();
