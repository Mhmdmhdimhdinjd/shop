import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import './styles/style.css'
import Home from "./pages/Home/Home";
import store from "./redux/store";
import PrivateRoute from "./navigation/PrivateRoute";
import Login from './components/auth/login/Login'
import Signup from "./components/auth/signup/Signup";
import Userprofile from "./components/auth/userprofile/userprofile";


const Apptest = () => {







    return (

        <>

            <Provider store={store}>

                <Router>



                    {/* <Home /> */}



                    <Routes>

                        <Route path='/shop/' element={<Home />} />

                        <Route path='/shop/Home' element={<PrivateRoute><Home /></PrivateRoute>} />

                        <Route path='/shop/login' element={<Login />} />

                        <Route path='/shop/signup' element={<Signup />} />

                        <Route path="/shop/user" element={<Userprofile/>}  />

                    </Routes>

                </Router>
            </Provider>

        </>
    )
}

export default Apptest