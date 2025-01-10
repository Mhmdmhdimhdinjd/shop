import { Button, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '/src/redux/reducers/AuthSlice';
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';


const Userprofile = () => {

    const user = JSON.parse(localStorage.getItem('logeduser'))

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = () => {

        dispatch(logoutUser())

        navigate('/shop/home')

    }


    return (
        <>

            <Typography
                component="h1"
                fontFamily={'gandom'}
                color="primary"
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mb: 2
                }}
            >

                نام کاربری: <br /> {user.username}

            </Typography>

            <Typography
                component="h1"
                fontFamily={'gandom'}
                color="primary"
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mb: 2
                }}
            >

                رمز عبور: {user.password}

            </Typography>

            <Button
                size="large"
                color='error'
                variant="contained"
                startIcon={<LogoutIcon />}
                sx={{ fontFamily: 'gandom' }}
                onClick={handleLogout}
            >
                خروج از خساب کاربری</Button>

        </>
    )
}


export default Userprofile