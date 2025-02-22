import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import { toast } from "react-hot-toast";

//Guardado de datos de autenticación.
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);

      // Extraer el email del usuario desde res.config.data
      const userData = JSON.parse(res.config.data);
      const userEmail = userData.email;

      toast.success(`Bienvenido: ${userEmail}`);

      // Espera 500ms para que el toast se muestre antes de redirigir
      setTimeout(() => {
        window.location.href = "/userPage";
      }, 1500);
    } catch (e) {
      if (Array.isArray(e.response?.data)) {
        return setErrors(e.response.data);
      }
      setErrors([e.response?.data?.message || "Error desconocido"]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signin,
        signup,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
