import { signToken } from "src/utils/token";
import LoginModel from "src/model/users";
import * as _ from "lodash";
import { wrapSuccess } from "src/utils/route";
import { ILoginReq } from "src/controller/types/login";

export default class LoginService {
  login = async (props: ILoginReq) => {
    try {
      const { username } = props;
      const data = await LoginModel.login(props);
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
