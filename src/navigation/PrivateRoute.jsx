import React from 'react';
import {useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../pages/profile/profile';


const PrivateRoute = ({ children }) => {

    location = useLocation()

    const storeduser = useSelector((state) => state.auth.user);
    const logeduser = useSelector((state) => state.auth.logeduser);
    localStorage.setItem('userredirect',location.pathname);
    
    
    if (!storeduser) {
        return<Profile/>
    } else if (!logeduser) {
        return <Profile />;
    }

    return children;
};

export default PrivateRoute;
