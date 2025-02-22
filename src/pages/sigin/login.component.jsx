import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth.context";
import toast, { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "../../index.css";

import { Link as RouterLink } from "react-router-dom"; // react-router-dom para MatUI

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (signinErrors && signinErrors.length > 0) {
      signinErrors.forEach((error) => {
        toast.error(error); // Muestra cada error como un toast
      });
    }
  }, [signinErrors]);

  useEffect(() => {
    if (errors.email) {
      toast.error("El email es requerido");
    }
    if (errors.password) {
      toast.error("La contraseña es requerida");
    }
  }, [errors.email, errors.password]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen ">
        <div className="h-screen md:flex">
          <div className="w-1/2 h-full bg-black {flex} justify-center items-center hidden md:flex">
            <img
              className="w-full h-full object-cover opacity-60"
              src="https://images.unsplash.com/photo-1624377632657-3902bfd35958?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagen"
            />
          </div>

          <div className="w-auto md:w-1/2 h-full bg-white flex justify-center items-center">
            <div className="md:w-[28rem] w-[18rem]">
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontSize: "4rem", ml: "auto", mt: "0rem" }}
              >
                LOGIN
              </Typography>

              <form onSubmit={onSubmit}>
                <ul className="space-y-8">
                  <TextField
                    fullWidth
                    label="USUARIO"
                    id="outlined-required"
                    defaultValue=""
                    type=""
                    {...register("email", { required: true })}
                  />

                  {errors.email && (
                    <span className="text-red-700">{errors.email.message}</span>
                  )}

                  <TextField
                    fullWidth
                    label="PASSWORD"
                    id="outlined-required"
                    defaultValue=""
                    type="password"
                    {...register("password", { required: true })}
                  />

                  {errors.password && (
                    <span className="text-red-700">
                      {errors.password.message}
                    </span>
                  )}

                  <Button
                    variant="contained"
                    disableElevation
                    type="submit"
                    sx={{ width: "100%" }}
                  >
                    INICIAR SESIÓN
                  </Button>

                  <div className="flex">
                    <Link
                      component={RouterLink}
                      to="/getDefault"
                      variant="body"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>

                    <Link
                      component={RouterLink} // Usar RouterLink como el componente para navigate
                      to="/" // La ruta de redirección
                      variant="body"
                      sx={{ marginLeft: "auto" }}
                    >
                      Volver
                    </Link>
                  </div>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
