import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.2.141:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    await cache.store(url, response.data);
    return response;
  }
  const dataFromCache = await cache.get(url);
  return dataFromCache ? { ok: true, data: dataFromCache } : response;
};
export default apiClient;
