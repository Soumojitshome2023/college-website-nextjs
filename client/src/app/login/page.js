"use client"
import React from 'react';
import { useState, useEffect } from "react";
import { AdminLogIn } from '@/Helper/AdminLogIn';
import { AdminSignUp } from '@/Helper/AdminSignUp';
import ColorRingLoader from '@/components/Common/Others/ColorRingLoader';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth';


const SignInForm = () => {
	const { authUser, IsLoading, setAuthUser } = useAuth();
	const [Name, setName] = useState('');
	const [UserName, setUserName] = useState('');
	const [Email, setEmail] = useState('@gmail.com');
	const [Contact, setContact] = useState('');
	const [Password, setPassword] = useState("");
	const [ConfirmPassword, setConfirmPassword] = useState("");
	const [ProfilePicURL, setProfilePicURL] = useState("");

	const [ShowMessage, setShowMessage] = useState('');
	const [LogSign, setLogSign] = useState(false);
	const [PassRememberMe, setPassRememberMe] = useState(false);
	const [PassResetLoading, setPassResetLoading] = useState(false);
	const [RingLoad, setRingLoad] = useState(false);

	const nav = useRouter()

	const InputFieldClass = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

	const SignUpBtnHandel = async () => {
		setRingLoad(true);
		try {
			const res = await AdminSignUp(Name, UserName, Email, Contact, Password, ProfilePicURL);
			if (res.success) {
				setAuthUser(res.admin);
				setShowMessage(res?.message);
			}
		} catch (error) {
			setShowMessage(error?.message);
		}
		setRingLoad(false);
	}

	const LogInBtnHandel = async () => {
		setRingLoad(true);
		try {
			const res = await AdminLogIn(Email, Password);
			if (res.success) {
				setAuthUser(res.admin);
				// nav.push("/admin/dashboard");
				setShowMessage(res?.message);
			}
		} catch (error) {
			setShowMessage(error?.message);
		}
		setRingLoad(false);
	}


	const handleCheckboxChange = (event) => {
		if (typeof window !== 'undefined') {
			sessionStorage.setItem('RememberMe', event.target.checked);
		}
		setPassRememberMe(event.target.checked);
	};

	useEffect(() => {
		if (authUser && authUser?.isAdmin) {
			nav.push("/admin/dashboard");
		}
	}, [authUser, IsLoading]);

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
						{LogSign &&
							<div>
								<label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
								<input type="text" name="Name" id="Name" className={InputFieldClass} placeholder="Enter Your Name" required="" value={Name} onChange={(e) => setName(e.target.value)} />
							</div>
						}
						{LogSign &&
							<div>
								<label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
								<input type="text" name="UserName" id="UserName" className={InputFieldClass} placeholder="Enter UserName" required="" value={UserName} onChange={(e) => setUserName(e.target.value)} />
							</div>
						}
						<div>
							<label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
							<input type="email" name="Email" id="Email" className={InputFieldClass} placeholder="Enter Email" required="" value={Email} onChange={(e) => setEmail(e.target.value)} />
						</div>
						{LogSign &&
							<div>
								<label htmlFor="Contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
								<input type="text" name="Contact" id="Contact" className={InputFieldClass} placeholder="Enter Contact" required="" value={Contact} onChange={(e) => setContact(e.target.value)} />
							</div>
						}
						<div>
							<label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
							<input type="password" name="Password" id="Password" placeholder="••••••••" className={InputFieldClass} required="" onChange={(e) => setPassword(e.target.value)} value={Password} />

							{/* {LogSign && <>
								<label htmlFor="ConfirmPassword" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
								<input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="••••••••" className={InputFieldClass} required="" onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword} />
							</>
							} */}
						</div>


						{/* <div className="flex items-center justify-between">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" checked={PassRememberMe} onChange={handleCheckboxChange} />
								</div>
								<div className="ml-3 text-sm">
									<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
								</div>
							</div>
							{Email && <>
								{PassResetLoading ? <ColorRingLoader /> :
									<button type="submit" className="font-bold underline  hover:text-green-700 dark:text-purple-500 text-purple-900">Reset Password</button>
								}
							</>}
						</div> */}
						<p className="font-bold text-red-600">{ShowMessage}</p>

						{RingLoad ? <ColorRingLoader /> : <>
							{Password && Email && <>
								{LogSign ?
									<button type="submit" className="block w-full rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  shadow-lg shadow-purple-500/50  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={SignUpBtnHandel}>Sign Up</button> :
									<button type="submit" className="block w-full rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  shadow-lg shadow-purple-500/50  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={LogInBtnHandel}>Log in</button>
								}
							</>}
						</>}


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