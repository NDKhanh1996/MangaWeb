import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

export default function AuthModal() {
    const [showModalOne, setShowModalOne] = useState(true);

    const toggleModal = () => {
        setShowModalOne(!showModalOne);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={{flexGrow: 1}}/>
            <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                    bgcolor: 'blue',
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'gray',
                        color: 'white',
                    },
                }}
            >
                Login/Register
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button onClick={toggleModal}>
                        {showModalOne ? 'Switch to Signup' : 'Switch to Signin'}
                    </Button>
                    {showModalOne ? <LoginForm/> : <SignupForm/>}
                </Box>
            </Modal>
        </>
    )
}