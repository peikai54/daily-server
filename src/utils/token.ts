import { secretKey } from "../config";
const jwt = require("jsonwebtoken");

export const signToken = (username: string): string => {
  const payload = {
    username,
  };
  let token = "";
  try {
    token = jwt.sign(payload, secretKey, { expiresIn: "10 days" });
    return token;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const decodeToken = (token: string) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

export const getTokenFromHeader = (ctx) => {
  let token = "";
  const authStr = ctx.request.header.authorization;
  token = authStr.split(" ")?.[1];
  if (token) {
    return token;
  } else {
    const error = new Error(
      "header的authorization属性中没有token,请从cookie中获取"
    );
    throw error;
  }
};
