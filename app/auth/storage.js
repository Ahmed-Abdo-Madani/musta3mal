import * as secureStore from "expo-secure-store";

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

const removeToken = async () => {
  try {
    return await secureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error Deleting Secure Token  " + error);
  }
};
export default {
  storeToken,
  getToken,
  removeToken,
};
