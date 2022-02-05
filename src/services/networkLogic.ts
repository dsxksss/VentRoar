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

const changeUserPassword = async (createData: object) => {
  await https.put(`${https.api.userCreateApi}`, createData);
};

const pushText = async (textData: object) => {
  await https.post(`${https.api.userTextApi}${getJWT()}`, textData);
};

const pushTextAndUpdata = async (textID: string, textData: object) => {
  await https.put(`${https.api.userTextApi}${textID}`, textData);
};

const deleteUsetText = async (textID: string) => {
  await https.delete(`${https.api.textDataApi}${textID}/${getJWT()}`);
};

export default {
  tokenValidation,
  loginIN,
  loginOUT,
  getJWT,
  createUser,
  pushText,
  pushTextAndUpdata,
  deleteUsetText,
  changeUserPassword,
};
