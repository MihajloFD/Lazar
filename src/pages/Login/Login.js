import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { profileURL } from '../../constants/pagesRoute';
import { appInitialize, authUser } from '../../redux/actions/app/appActions';
import { authSelector } from '../../redux/selectors/product/appSelector';


export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const authState = useSelector(authSelector);

    const navigate = useNavigate();

    useEffect(() => {
        if (authState.user) {
            navigate(profileURL);
            dispatch(appInitialize())
        }
    }, [authState, navigate, dispatch]);

    const onSubmit = (data) => {
        dispatch(authUser(data.email, data.password));
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 bg-white">
                <h2 className="text-xl font-bold mb-6">Login</h2>
                <div className="mb-4">
                    <div className="relative z-0">
                        <input type="text"  {...register('email', { required: 'E-mail is requierd' })} id="email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">E-mail</label>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative z-0">
                        <input type="password"  {...register('password', { required: 'Password is required' })} id="password" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer ${errors.password ? 'border-red-500' : 'border-gray-300'}`} placeholder=" " />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>
                </div>
                {authState?.error?.message && <p className="text-red-500 p-2 text-center rounded-3xl">{authState?.error?.message}</p>}
                <button disabled={authState.loading} type="submit" className="w-full bg-black text-white p-2 rounded-3xl cursor-pointer">
                    Login
                </button>
            </form>
        </div>
    );
};

