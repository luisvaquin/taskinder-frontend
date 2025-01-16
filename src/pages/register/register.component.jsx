import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { registerRequest } from '../../api/auth';
import { useAuth } from '../../context/auth.context.jsx'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function RegisterPage() {
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //Contexto de autenticación
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (value) => {
        signup(value)
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    // Mostrar errores globales con toast
    useEffect(() => {
        if (registerErrors && registerErrors.length > 0) {
            registerErrors.forEach((error) => {
                toast.error(error); // Muestra cada error como un toast
            });
        }
    }, [registerErrors]);
    return (
        <div className=''>
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
        </div>
    )
}

export default RegisterPage;