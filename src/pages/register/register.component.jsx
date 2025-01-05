import React from 'react'
import { useForm } from 'react-hook-form';
import { registerRequest } from '../../api/auth';

function RegisterPage() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        const res = await registerRequest(values);
        console.log(res);
    })

    return (
        <div className=''>
            <form onSubmit={onSubmit} className='flex-col'>
                Username <input type="username" {...register("username", { required: true })} />
                email <input type="email" {...register("email", { required: true })} />
                password<input type="password" {...register("password", { required: true })} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;