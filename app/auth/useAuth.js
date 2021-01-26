import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import AuthStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    AuthStorage.storeToken(token);
  };
  const logout = () => {
    setUser(null);
    AuthStorage.removeToken();
  };
  return { user, login, logout };
};
