import * as secureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "secureToken";
const storeToken = async (token) => {
  try {
    return await secureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("Error Storing Secure Token  " + error);
  }
};

const getToken = async () => {
  try {
    return await secureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error Getting Secure Token  " + error);
  }
};
const getUser = async () => {
  try {
    const token = await getToken();
    if (!token) return null;
    return jwtDecode(token);
  } catch (error) {
    console.log("Error Getting User Or Decoding JWT " + error);
  }
};

const removeToken = async () => {
  try {
    return await secureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error Deleting Secure Token  " + error);
  }
};
export default {
  getToken,
  storeToken,
  getUser,
  removeToken,
};
