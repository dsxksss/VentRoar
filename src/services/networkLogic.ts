import https from "./httpServices";

const tokenValidation = async () => {
  if (getJWT() !== null || getJWT() !== "")
    await https.post(`${https.api.userLoginApi}${getJWT()}`);
};

const loginIN = async (loginData?: object) => {
  const { data: JWT } = await https.post(
    `${https.api.userLoginApi}`,
    loginData
  );
  localStorage.setItem("token", JWT.token);
  localStorage.setItem("oldTime", JWT.time);
};

const loginOUT = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("oldTime");
};

const getJWT = (): string | null => {
  return localStorage.getItem("token");
};

const createUser = async (createData: object) => {
  await https.post(`${https.api.userCreateApi}`, createData);
};

export default {
  tokenValidation,
  loginIN,
  loginOUT,
  getJWT,
  createUser,
};
