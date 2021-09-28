import { wrapSuccess } from "@src/utils/route";
import { decodeToken, getTokenFromHeader } from "src/utils/token";
import LoginService from "../service/login";
import { ILoginReq } from "./types/login";

class LoginController {
  private service = new LoginService();

  // 登录
  login = async (ctx) => {
    const data: ILoginReq = ctx.request.body;
    if (!data.username || !data.password) {
      ctx.body = "请输入用户名与密码";
      return;
    } else {
      const result = await this.service.login(data);
      ctx.body = result;
      if (result?.code === 0) {
        ctx.cookies.set("jwt", result.data.token, {
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
    ctx.body = wrapSuccess({ username: data.username }, "请求成功");
  };
}

export default new LoginController();
