"use client"
import React from 'react';

const SignInForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className=' border-2 w-fit mx-auto p-4 rounded-lg backdrop-blur-lg shadow-xl px-12 mt-12'>
            <div className="flex items-center justify-center mt-24 mb-24">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none  rounded w-full py-2 px-3 leading-tight bg-transparent "
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none  rounded w-full py-2 px-3 leading-tight outline-none  bg-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="remember" className="inline-flex items-center text-sm text-gray-700">
                            <input
                                id="remember"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="form-checkbox h-5 w-5 text-blue-600 rounded-md"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign In
                        </button>
                        <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="mt-6 flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                        <p className="text-center text-gray-500">or</p>
                    </div>
                    <div className="mt-6 flex justify-center gap-4">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign in with Google
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign in with GitHub
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SignInForm;