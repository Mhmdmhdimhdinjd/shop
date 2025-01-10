import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '/src/redux/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { Typography,Button, TextField, Box } from '@mui/material';
import '../../../styles/style.css'


const Login = () => {



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    let redirectPath = JSON.parse(localStorage.getItem('userredirect'));
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser.username === username && storedUser.password === password) {
      dispatch(loginUser(storedUser));
      navigate(redirectPath || '/shop/')
    } else {
      setError('نام کاربری یا رمز عبور نادرست است');
    }
  };

  return (
    <Box
    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', fontFamily: 'gandom' }}
    >
      <Typography
        component="h1"
        fontFamily={'gandom'}
        sx={{
          textAlign: 'center',
          color: 'black',
          fontSize: '2rem',
          fontWeight: 'bold',
          mb: 2
        }} >
        ورود
      </Typography>
      <TextField
        label="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{
          mb: 2,
          borderRadius: 1,
        }}
      />

      <TextField
        type="password"
        label='رمز عبور'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          mb: 2,
          borderRadius: 1,
        }}
      />

      {/* {error && ( */}
        <Typography sx={{ color: 'red.500', fontFamily: 'gandom' }}>
          {error}
        </Typography>
    

      <Button
        size="large"
        variant='contained'
        onClick={handleLogin}
        sx={{
          backgroundColor: 'blue.500',
          color: 'white',
          px: 2,
          borderRadius: 1,
          fontFamily: 'gandom'
        }}
      >
        ورود
      </Button>



    </Box>
  );
};

export default Login;
