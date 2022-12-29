import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
    const {login, googleSignin} = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //Password Validation (Regular Expression)
        if(!/(?=.*[A-Z])/.test(password)){
            setPasswordError('Please provide atleast one uppercase.');
            setError(true);
            return;
        }
        if(password.length < 8){
            setPasswordError('Password should be atleast 8 characters.');
            setError(true);
            return;
        }
        if(!/(?=.*[!@#$%*])/.test(password)){
            setPasswordError('Please use atleast 1 special character.');
            setError(true);
            return;
        }
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.error(error.message);
            setPasswordError(error.message)
        })
    };

    //Google Sign in
    const handleGoogleSignIn = () =>{
        googleSignin()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error.message))
    };
  return (
    // <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-white dark:bg-gray-900">
    //   <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    //     <div className="mx-auto max-w-lg text-center">
    //       <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">Get started today!</h1>

    //       <p className="mt-4 text-gray-500">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
    //         nulla eaque error neque ipsa culpa autem, at itaque nostrum!
    //       </p>
    //     </div>

    //     <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
    //       <div>
    //         <label for="email" className="sr-only">
    //           Email
    //         </label>

    //         <div className="relative">
    //           <input
    //             type="email"
    //             className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
    //             placeholder="Enter email"
    //           />

    //           <span className="absolute inset-y-0 right-4 inline-flex items-center">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5 text-gray-400"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    //               />
    //             </svg>
    //           </span>
    //         </div>
    //       </div>

    //       <div>
    //         <label for="password" className="sr-only">
    //           Password
    //         </label>
    //         <div className="relative">
    //           <input
    //             type="password"
    //             className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
    //             placeholder="Enter password"
    //           />

    //           <span className="absolute inset-y-0 right-4 inline-flex items-center">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5 text-gray-400"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    //               />
    //             </svg>
    //           </span>
    //         </div>
    //       </div>



    //       <div className="flex items-center justify-between">
    //         <p className="text-sm text-gray-500">
    //           No account?
    //           <a href="#" className="underline">
    //             Sign up
    //           </a>
    //         </p>

    //         <button
    //           type="submit"
    //           className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
    //         >
    //           Sign in
    //         </button>
    //       </div>
    //     </form>
    //   </div>

    //   <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    //     <img
    //       alt="Welcome"
    //       src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //       className="absolute inset-0 h-full w-full object-cover"
    //     />
    //   </div>
    // </section>

    // option 2
    




    //Email Password Login
    

    //GitHub Sign in
        <div className="hero min-h-screen bg-base-200 grid justify-center">
                        
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                        {
                            error && 
                            <div className="alert alert-error shadow-lg">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>{passwordError}</span>
                            </div>
                            </div>
                        }
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label for="username" className="block text-left  text-gray-400">
                            <span>Email</span>
                            </label>
                            <input type="text" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-600 text-gray-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label for="password" className="block text-left text-gray-400">
                                <span>Password</span>
                            </label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-600 text-gray-100 focus:border-violet-400" />
                            <div className="flex justify-end text-xs text-gray-400">
                                <Link to='/register'>Forgot Password?</Link>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400" type='submit'>Login</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
                        <Link to='/register' className="underline text-gray-100"> Register</Link>
                    </p>
                </div>
        </div>
    );
};

export default Login;
