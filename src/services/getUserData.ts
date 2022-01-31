import https from "./httpServices";

export default async function () {
  try {
    const { data } = await https.get(`${https.api.userDataApi}`);
    return data;
  } catch (error) {
    return [];
  }
}
