import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth.js";
import { useAuth } from "../../context/auth.context.jsx";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function RegisterPage() {
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Contexto de autenticación
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (value) => {
    signup(value);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  // Mostrar errores globales con toast
  useEffect(() => {
    if (registerErrors && registerErrors.length > 0) {
      registerErrors.forEach((error) => {
        toast.error(error); // Muestra cada error como un toast
      });
    }
  }, [registerErrors]);
  return (
    <div className="min-h-screen ">
      <div className="h-screen md:flex">
        <div className="w-1/2 h-full bg-white {flex} justify-center items-center hidden md:flex">
          <div className="md:w-[28rem] w-[18rem]">
            <div className="flex h-auto w-auto">
              <div>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ fontSize: "4rem", ml: "auto", mt: "0rem" }}
                >
                  Register
                </Typography>
              </div>
              <div className="mt-[13px] ml-3 w-[auto] h-[auto]">
                <img
                  className="pm-3"
                  src=""
                  alt="Logo"
                  style={{ width: 70, height: 50 }}
                />
              </div>
            </div>

            <form>
              <ul className="space-y-7">
                <TextField
                  fullWidth
                  label="Nombre"
                  id="outlined-required"
                  defaultValue=""
                  type=""
                />

                <TextField
                  fullWidth
                  label="Email o correo"
                  id="outlined-required"
                  defaultValue=""
                  type="password"
                />
                <TextField
                  fullWidth
                  label="Cotraseña"
                  id="outlined-required"
                  defaultValue=""
                  type="password"
                />

                <Button
                  variant="contained"
                  disableElevation
                  type="submit"
                  sx={{ width: "100%" }}
                >
                  REGISTAR
                </Button>

                <div className="flex">
                  <Link to="/getDefault" variant="body">
                    Iniciar sesion
                  </Link>

                  <Link
                    // Usar RouterLink como el componente para navigate
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
        <div className="w-auto md:w-1/2 h-full bg-slate-800 flex justify-center items-center">
          <img
            className="w-full h-full object-cover opacity-60"
            src="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagen"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
{
  /* <div className=''>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={onSubmit} className='flex-col'>
                Username <input type="username" {...register("username", { required: true })} />
                {errors.username && <span className='text-red-700'>user is required</span>}
                email <input type="email" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-700'>email is required</span>}
                password<input type="password" {...register("password", { required: true })} />
                {errors.password && <span className='text-red-700'>password is required</span>}
                <button type='submit'>Register</button>
            </form>
        </div> */
}
