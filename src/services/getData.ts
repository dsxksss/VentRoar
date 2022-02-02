import https from "./httpServices";

const getUserData = async () => {
  return await https.get(`${https.api.userDataApi}`);
};

const getUserTextData = async (JWT: string | null) => {
  return await https.get(`${https.api.userDataApi}${JWT}`);
};

export default {
  getUserData,
  getUserTextData,
};
