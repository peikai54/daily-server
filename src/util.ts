const key = "key";
const jwt = require("jsonwebtoken");

export const getToken = (username: string): string => {
  const payload = {
    username,
  };

  let token = "";

  try {
    token = jwt.sign(payload, key, { expiresIn: 60 * 60 });
    return token;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const decodeToken = (token: string) => {
  const decoded = jwt.verify(token, key);
  return decoded;
};
