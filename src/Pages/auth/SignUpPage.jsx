import { Button, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SignUpPage = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center py-5'>
            <main className="w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/3 max-w-lg border border-gray-800 flex flex-col p-6 rounded-xl shadow-lg">

                <section className='flex flex-col gap-3 mb-5'>
                    <p>EasyDocs</p>
                    <p className='text-3xl font-semibold'>Sign up</p></section>
                 
                 <section className='flex flex-col justify-center gap-3 '>
                <article className='flex flex-col justify-center '>
                    <p>Full name:</p>
                    <input className='border-gray-500 border rounded-[5px] p-2'
                        placeholder='Kean Joshua'
                        type="text" />
                        </article>
                <article className='flex flex-col justify-center '>
                    <p>Email:</p>
                    <input className='border-gray-500 border rounded-[5px] p-2'
                        placeholder='keanjoshua@tan'
                        type="text" />
                </article>
                <article className='flex flex-col justify-center'>
                    <p>Password:</p>
                    <input className='border-gray-500 border rounded-[5px] p-2'
                        placeholder='····'
                        type="password" />
                </article>
                </section>
                <article className=''>
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    transform: "scale(0.8)",
                                    color: "black",
                                    "&.Mui-checked": {
                                        color: "black",
                                    },
                                }}
                            />
                        }
                        label="I want to receive updates via email."
                        componentsProps={{
                            typography: {
                                fontSize: {
                                    xs: "0.75rem", // Small screens
                                    sm: "0.875rem", // Medium screens
                                    md: "1rem", // Large screens
                                },
                            },
                        }}
                    />


                </article>
                <article className='flex flex-col gap-3 font-medium'>
                    <Button
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            width: '100%'
                        }}
                    >Sign up</Button>

                </article>
                <div className="flex items-center my-4">
                    <hr className="w-full border-gray-600" />
                    <span className="px-2 text-gray-400 text-sm">or</span>
                    <hr className="w-full border-gray-600" />
                </div>
                <div className="flex flex-col space-y-3 w-full max-w-sm mx-auto font-medium">
                    {/* Google Button */}
                    <button className="flex items-center justify-center w-full border border-gray-600 rounded-lg py-2  text-lg hover:bg-black hover:text-white transition">
                        <FcGoogle className="text-2xl mr-3" />
                        Sign up with Google
                    </button>

                    {/* Facebook Button */}
                    <button className="flex items-center justify-center w-full border border-gray-600 rounded-lg py-2  text-lg hover:bg-black hover:text-white transition">
                        <FaFacebook className="text-blue-500 text-2xl mr-3" />
                        Sign up with Facebook
                    </button>
                    <p className='text-center'>Already have an account? <span className='hover:cursor-pointer hover:underline'><Link to="/">Sign in</Link></span></p>
                </div>


            </main>

        </div>
    )
}

export default SignUpPage
