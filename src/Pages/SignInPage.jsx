import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Modal, Box, Typography, TextField } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const SignInPage = () => {
    const [openResetPassword, setOpenResetPassword] = useState(false);
    const [email, setEmail] = useState('');
    
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    

    const handleForgotPassword = () => {
        setOpenResetPassword(true);
    };

    const handleClose = () => {
        setOpenResetPassword(false);
        setEmail(""); // Reset input on close
        setEmailError(""); // Reset error message
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Simple regex to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError(""); // Clear error if valid
        }
    };

    return (
        <div className='w-full h-full flex items-center justify-center py-5'>
            <main className="w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/3 max-w-lg border border-gray-800 flex flex-col p-6 rounded-xl shadow-lg">

                <section className='flex flex-col gap-3 mb-5'>
                    <p>EasyDocs</p>
                    <p className='text-3xl font-semibold'>Sign in</p>
                </section>

                <section className='flex flex-col justify-center gap-3 '>
                    <article className='flex flex-col justify-center'>
                        <p>Email:</p>
                        <input className='border-gray-500 border rounded-[5px] p-2'
                            placeholder='yourname@example.com'
                            type="text" />
                    </article>
                    <article className='flex flex-col justify-center'>
                        <p>Password:</p>
                        <input className='border-gray-500 border rounded-[5px] p-2'
                            placeholder='····'
                            type="password" />
                    </article>
                </section>

                <article>
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
                        label="Remember me."
                        componentsProps={{
                            typography: {
                                fontSize: {
                                    xs: "0.75rem",
                                    sm: "0.875rem",
                                    md: "1rem",
                                },
                            },
                        }}
                    />
                </article>

                <article className='flex flex-col gap-3 font-medium'>
                    <Button
                     onClick={() => navigate("/dashboard")}
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
                    >
                        Sign in
                    </Button>
                    <p 
                        className='text-center hover:cursor-pointer hover:underline' 
                        onClick={handleForgotPassword}
                    >
                        Forgot your password?
                    </p>
                </article>

                <div className="flex items-center my-4">
                    <hr className="w-full border-gray-600" />
                    <span className="px-2 text-gray-400 text-sm">or</span>
                    <hr className="w-full border-gray-600" />
                </div>

                <div className="flex flex-col space-y-3 w-full max-w-sm mx-auto font-medium">
                    <button className="flex items-center justify-center w-full border border-gray-600 rounded-lg py-2 text-lg hover:bg-black hover:text-white transition">
                        <FcGoogle className="text-2xl mr-3" />
                        Sign in with Google
                    </button>

                    <button className="flex items-center justify-center w-full border border-gray-600 rounded-lg py-2 text-lg hover:bg-black hover:text-white transition">
                        <FaFacebook className="text-blue-500 text-2xl mr-3" />
                        Sign in with Facebook
                    </button>

                    <p className='text-center'>
                        Don't have an account yet? 
                        <span className='hover:cursor-pointer hover:underline'>
                            <Link to="/signup"> Sign up</Link>
                        </span>
                    </p>
                </div>
            </main>

            {/* Password Reset Modal */}
            <Modal open={openResetPassword} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "white",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" className="text-center font-semibold">
                        Reset Password
                    </Typography>
                    <Typography className="text-gray-600 mt-2">
                        Enter your email, and we'll send you an OTP to reset your password.
                    </Typography>

                    <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                        error={!!emailError} // Show error style if emailError exists
                        helperText={emailError} // Show error message
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
                        disabled={!email || !!emailError} // Disable if invalid email
                        onClick={() => navigate("/otp")}
                    >
                        Send Reset Link
                    </Button>

                    <Button
                        fullWidth
                        onClick={handleClose}
                        sx={{ mt: 1, color: "black", textTransform: "none" }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Modal>

               
        </div>
    );
}

export default SignInPage;
