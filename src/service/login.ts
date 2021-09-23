import { signToken } from "src/utils/token";
import LoginModel from "src/model/users";
import * as _ from "lodash";
import { wrapSuccess } from "src/utils/route";

export default class LoginService {
  login = async (username: string, password: string) => {
    try {
      const data = await LoginModel.login(username, password);
      if (!_.isEmpty(data)) {
        const token = signToken(username);
        return wrapSuccess({ token }, "登录成功");
      } else {
        return { data: { token: "" }, code: -1, message: "登录失败" };
      }
    } catch (error) {
      console.log(error);
    }
  };
}
