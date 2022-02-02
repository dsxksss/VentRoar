import https from "./httpServices";

const getUserData = async () => {
  const { data } = await https.get(`${https.api.userDataApi}`);
  return data;
};

const getUserTextData = async (JWT: string | null) => {
  const { data } = await https.get(`${https.api.userDataApi}${JWT}`);
  return data;
};

const getAllTextData = async () => {
  const { data } = await https.get(`${https.api.textDataApi}`);
  return data;
};

export default {
  getUserData,
  getUserTextData,
  getAllTextData,
};
