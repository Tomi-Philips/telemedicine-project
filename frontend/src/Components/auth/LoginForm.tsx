import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { MoonLoader } from 'react-spinners';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
  

    const initialValues: LoginFormValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Address").required("Required"),
        password: Yup.string()
        .required("Required")
        .min(6, "Must be at least 6 characters long")
        .matches(/^[a-zA-Z0-9]+$/, 'Password can only contain letters and numbers')
    });

    const handleSubmit = (values: LoginFormValues) => {
        if (formik.isValid) {
        setLoading(true);
        // Perform login logic here
        } else {
        alert("Check your input field(s)");
        }

        console.log(values);
    };

    const formik: FormikProps<LoginFormValues> = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit
    });

    const formStyles = {
        emailInput: "w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",
        emailLabel: "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",
        passwordInput: "w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",
        passwordLabel: "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
    };

  return (
    <>
        {loading ? (
            <div className='flex justify-center items-center h-[100vh]'>
                <div className='bg-white p-5 rounded-xl shadow-lg w-96'>
                    <div className='flex justify-center'>
                        <MoonLoader
                            color="#3676d6"
                            size={120}
                        />
                    </div>
                    <p className="text-base mt-5 text-center text-gray-800">
                        Logging you in. <br />
                        <span className='text-indigo-600'>Please wait a moment.</span>
                    </p>
                </div>
                </div>
            ) : (
                <div className='flex justify-center items-center h-[100vh]'>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 bg-clip-border shadow-gray-900/20">
                    <h3 className="block text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                        Sign In
                    </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className={formStyles.emailInput}
                            // name='email'
                            placeholder=" "
                            {...formik.getFieldProps('email')}
                        />
                        <label className={formStyles.emailLabel}>
                            Email
                        </label>
                        </div>
                        <div className=''>
                        {formik.touched.email && formik.errors.email && (
                            <span className='text-red-400 text-sm'>{formik.errors.email}</span>
                        )}
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className={formStyles.passwordInput}
                            // name='password'
                            placeholder=" "
                            {...formik.getFieldProps('password')}
                            type='password'
                        />
                        <label className={formStyles.passwordLabel}>
                            Password
                        </label>
                        </div>
                        <div className=''>
                        {formik.touched.password && formik.errors.password && (
                            <span className='text-red-400 text-sm'>{formik.errors.password}</span>
                        )}
                        </div>
                        <div className="-ml-2.5 -mt-5 -mb-4">
                        <div className="inline-flex items-center">
                            <label htmlFor="checkbox" className="relative flex items-center p-3 rounded-full cursor-pointer">
                            <input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-700 checked:bg-indigo-700 checked:before:bg-indigo-700 hover:before:opacity-10" id="checkbox" name='remember' />
                            <span
                                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"></path>
                                </svg>
                            </span>
                            </label>
                            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">Remember Me</label>
                        </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <button className="block w-full select-none rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-800 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg text-nowrap hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Login</button>
                        <div className='flex gap-2 mt-4'>
                        <button className="block text-nowrap w-full select-none rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-800 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Sign in with Google</button>
                        <Link to='../Reset'>
                            <button className="block text-nowrap w-full select-none rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-800 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Reset Password</button>
                        </Link>
                        </div>
                        <p className="flex justify-center mt-6 text-sm antialiased font-light leading-normal text-inherit">
                        Don't have an account?
                        <Link to='../Register'>
                            <span className="block ml-1 text-sm antialiased font-bold leading-normal text-indigo-700">Register</span>
                        </Link>
                        </p>
                    </div>
                    </form>
                </div>
                </div>
            )}
        </>
    );
};

export default LoginForm;
