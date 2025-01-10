import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import './styles/style.css'
import Home from "./pages/Home/Home";
import store from "./redux/store";
import PrivateRoute from "./navigation/PrivateRoute";
import Login from './components/auth/login/Login'
import Signup from "./components/auth/signup/Signup";
import Profile from "./pages/profile/profile";


const Apptest = () => {







    return (

        <>

            <Provider store={store}>

                <Router>



                    {/* <Home /> */}



                    <Routes>

                        <Route path='/shop/' element={<Home />} />

                        <Route path='/shop/Home' element={<Home />} />

                        <Route path="/shop/profile" element={<Profile/>}  />

                    </Routes>

                </Router>
            </Provider>

        </>
    )
}

export default Apptest