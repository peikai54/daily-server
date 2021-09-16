import { signToken } from "src/utils/token";
import LoginModel from "src/model/users";
import * as _ from "lodash";

export default class LoginService {
  login = async (username: string, password: string) => {
    try {
      const data = await LoginModel.login(username, password);
      if (!_.isEmpty(data)) {
        const token = signToken(username);
        return { token, code: 0, message: "登录成功" };
      } else {
        return { token: "", code: -1, message: "登录失败" };
      }
    } catch (error) {
      console.log(error);
    }
  };
}
