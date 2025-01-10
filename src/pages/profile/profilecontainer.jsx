import React from "react";
import { useSelector } from 'react-redux';
import Userprofile from "../../components/auth/userprofile/userprofile";
import Login from "../../components/auth/login/Login";
import Signup from "../../components/auth/signup/Signup";


const Profilecontainer = () => {

    const storeduser = useSelector((state) => state.auth.user);
    const logeduser = useSelector((state) => state.auth.logeduser);

    if (!storeduser) {
        return <Signup />;
    } else if (!logeduser) {
        return <Login/>;
    }

    return(
        <Userprofile/>
    )
    
}

export default Profilecontainer
