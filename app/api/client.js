import { create } from "apisauce";
import cache from "../utility/cache";
import secureStore from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.2.147:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await secureStore.getToken();
  if (!token) return;
  request.headers["x-auth-token"] = token;
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
