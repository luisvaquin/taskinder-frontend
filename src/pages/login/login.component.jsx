import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth.context";
import toast, { Toaster } from 'react-hot-toast';

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signin, errors: signinErrors } = useAuth();

    const onSubmit = handleSubmit(data => {
        signin(data)
    })

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

            <form onSubmit={onSubmit} className='flex-col'>
                email <input type="email" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-700'>email is required</span>}
                password<input type="password" {...register("password", { required: true })} />
                {errors.password && <span className='text-red-700'>password is required</span>}
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default LoginPage;