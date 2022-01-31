import https from "./httpServices";

const loginIN = async (loginData: object) => {
  const { data: JWT } = await https.post(
    `${https.api.userLoginApi}`,
    loginData
  );
  localStorage.setItem("token", JWT);
};
const loginOUT = (): void => {
  localStorage.removeItem("token");
};
const getJWT = (): string | null => {
  return localStorage.getItem("token");
};

export default {
  loginIN,
  loginOUT,
  getJWT,
};
