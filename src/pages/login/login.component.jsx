import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth.context";
import toast, { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom"; // Importar Link de react-router-dom

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

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen">
        <div className="flex h-screen">
          {/* Sección izquierda */}
          <div className="w-1/2 h-full bg-black flex justify-center items-center"></div>

          {/* Sección derecha */}
          <div className="w-1/2 h-full bg-white flex justify-center items-center">
            <div className="w-[25rem]">
              <form onSubmit={onSubmit}>
                <ul className="space-y-8">
                  <TextField
                    fullWidth
                    label="USUARIO"
                    id="outlined-required"
                    defaultValue=""
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-700">email is required</span>
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
                    <span className="text-red-700">password is required</span>
                  )}

                  <Button variant="contained" disableElevation type="submit">
                    INICIAR SESION
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
                      sx={{ marginLeft: "10rem" }}
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
      {/*  <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={onSubmit} className="flex-col">
        email <input type="email" {...register("email", { required: true })} />
        {errors.email && (
          <span className="text-red-700">email is required</span>
        )}
        password
        <input type="password" {...register("password", { required: true })} />
        {errors.password && (
          <span className="text-red-700">password is required</span>
        )}
        <button type="submit">Login</button>
      </form>*/}
    </>
  );
}

export default LoginPage;
