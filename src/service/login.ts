import { getToken } from "src/util";

export default class LoginService {
  login = async (username: string) => {
    const token = getToken(username);
    return token;
  };
}
