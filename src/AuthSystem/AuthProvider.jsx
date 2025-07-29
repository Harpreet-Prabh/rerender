import AuthContext from "./AuthContext";
import useAuth from "./useAuth";

function AuthProvider({ children }) {
  const authValues = useAuth();

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
