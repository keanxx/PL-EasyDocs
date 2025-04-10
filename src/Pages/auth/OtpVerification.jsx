import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(countdown);
        } else {
            setIsResendDisabled(false);
        }
    }, [timer]);

    const handleChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = () => {
        if (otp.join('').length === 6) {
            alert('OTP Verified Successfully!');
            navigate('/resetPassword'); // Redirect to homepage or dashboard
        } else {
            alert('Please enter a valid 6-digit OTP.');
        }
    };

    const handleResend = () => {
        setTimer(60);
        setIsResendDisabled(true);
        alert('Resending OTP...');
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <main className='w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/3 max-w-lg border border-gray-800 flex flex-col p-6 rounded-xl shadow-lg text-center'>
                <h2 className='text-3xl font-semibold'>Verify OTP</h2>
                <p className='text-gray-600 mt-2'>Enter the 6-digit OTP sent to your email.</p>

                <div className='flex justify-center gap-3 my-5'>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type='text'
                            maxLength='1'
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className='w-12 h-12 text-center text-2xl border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                        />
                    ))}
                </div>

                <Button
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': { backgroundColor: 'gray' },
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        width: '100%',
                    }}
                    onClick={handleSubmit}
                >
                    Verify OTP
                </Button>

                <p className='text-center text-sm mt-4'>
                    Didn’t receive OTP?{' '}
                    <span
                        className={`cursor-pointer ${isResendDisabled ? 'text-gray-400' : 'text-blue-500 hover:underline'}`}
                        onClick={!isResendDisabled ? handleResend : null}
                    >
                        Resend OTP {isResendDisabled && `in ${timer}s`}
                    </span>
                </p>
            </main>
        </div>
    );
};

export default OtpVerification;
