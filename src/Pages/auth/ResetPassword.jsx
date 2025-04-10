import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [openResetPassword, setOpenResetPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleForgotPassword = () => {
        if (!newPassword || !confirmPassword) {
            setError("Both fields are required!");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setError(""); // Clear error if everything is valid
        setOpenResetPassword(true);
    };

    const handleClose = () => {
        setOpenResetPassword(false);
    };

    return (
        <div className='w-full h-screen flex items-center justify-center py-5'>
            <main className="w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/3 max-w-lg border border-gray-800 flex flex-col p-6 rounded-xl shadow-lg">

                <section className='flex flex-col gap-3 mb-5'>
                    <p>EasyDocs</p>
                    <p className='text-3xl font-semibold'>Reset password</p>
                </section>

                <section className='flex flex-col justify-center gap-3'>
                    <article className='flex flex-col justify-center'>
                        <p>New Password:</p>
                        <input 
                            className='border-gray-500 border rounded-[5px] p-2'
                            placeholder='Enter new password'
                            type="text"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </article>
                    <article className='flex flex-col justify-center'>
                        <p>Confirm Password:</p>
                        <input 
                            className='border-gray-500 border rounded-[5px] p-2'
                            placeholder='Confirm password'
                            type="text"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </article>
                </section>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <article className='flex flex-col mt-3 gap-3 font-medium'>
                    <Button
                        onClick={handleForgotPassword}
                        sx={{
                            backgroundColor: newPassword && confirmPassword ? 'black' : 'gray',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: newPassword && confirmPassword ? 'primary.dark' : 'gray',
                            },
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            width: '100%',
                        }}
                        disabled={!newPassword || !confirmPassword}
                    >
                        Confirm
                    </Button>
                    <Button
                        onClick={() => navigate("/")}
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                            },
                            border: '1px solid black',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            width: '100%',
                        }}
                    >
                        Cancel
                    </Button>
                </article>
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
                        Confirmation
                    </Typography>
                    <Typography className="text-gray-600 mt-2">
                        Are you sure you want to change your password?
                    </Typography>

                    <section className='flex justify-evenly'>
                        <Button fullWidth onClick={handleClose} 
                        
                        sx={{ mt: 1, color: "black" }}>
                            Cancel
                        </Button>
                        <Button fullWidth variant="contained" 
                        onClick={() => navigate("/")}
                        sx={{ mt: 1, backgroundColor: 'black', color: 'white' }}>
                            Proceed
                        </Button>
                    </section>
                </Box>
            </Modal>
        </div>
    );
};

export default ResetPassword;
