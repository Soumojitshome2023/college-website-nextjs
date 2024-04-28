"use client"
import React from 'react';
import { useState, useEffect } from "react";

const SignInForm = () => {
	const [email, setEmail] = useState('@gmail.com');
	const [LogSign, setLogSign] = useState(false);
	const [RingLoad, setRingLoad] = useState(false);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setconfirmPassword] = useState(null);
	const [PassResetMessage, setPassResetMessage] = useState('');
	const [PassResetLoading, setPassResetLoading] = useState(false);
	const [PassRememberMe, setPassRememberMe] = useState(false);



	const handleCheckboxChange = (event) => {
		if (typeof window !== 'undefined') {
			sessionStorage.setItem('RememberMe', event.target.checked);
		}
		setPassRememberMe(event.target.checked);
	};

	return (
		<div className="flex flex-col items-center justify-center mx-auto">

			<div className="w-full m-2 mt-8 shadow dark:border sm:max-w-md  dark:bg-gray-800 dark:border-gray-700 rounded-lg backdrop-blur-lg shadow-blue-950 shadow-4xl">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						{LogSign ?
							'Sign Up (Create Account)' : 'Log in to your account'
						}
					</h1>
					<div className="space-y-3 md:space-y-4" >
						<div>
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
							<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div>
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
							<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)} />

							{LogSign && <>
								<label htmlFor="confirmpassword" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
								<input type="password" name="password" id="confirmpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setconfirmPassword(e.target.value)} />
							</>
							}
						</div>
						<div className="flex items-center justify-between">

							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" checked={PassRememberMe} onChange={handleCheckboxChange} />
								</div>
								<div className="ml-3 text-sm">
									<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
								</div>
							</div>

							{email && <>
								{PassResetLoading ? <ColorRingLoader /> :
									<button type="submit" className="font-bold underline  hover:text-green-700 dark:text-purple-500 text-purple-900" >Reset Password</button>
								}
							</>
							}
						</div>
						<p className="font-bold text-red-600">{PassResetMessage}</p>

						{password && email &&
							<>
								{LogSign ?
									<button type="submit" className="block w-full rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  shadow-lg shadow-purple-500/50  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2" >Sign Up</button> :
									<button type="submit" className="block w-full rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  shadow-lg shadow-purple-500/50  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Log in</button>
								}
							</>
						}


						<p className="text-sm text-gray-900 dark:text-gray-400">
							{LogSign ?
								'Already have an account? ' : 'Dont have an account? '
							}
							<button className="font-bold underline hover:text-green-700 dark:text-purple-500 text-purple-900" onClick={() => { setLogSign((prev) => !prev) }}>
								{LogSign ?
									'Log In' : 'Sign Up (create account)'
								}
							</button>
						</p>

					</div>
				</div>
			</div>
		</div>

	);
};

export default SignInForm;