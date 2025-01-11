import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import './styles/style.css'
import Home from "./pages/Home/Home";
import store from "./redux/store";
import PrivateRoute from "./navigation/PrivateRoute";
import Profile from "./pages/profile/profile";
import Products from "./pages/Products/products";
import Shoppingbasket from "./pages/Shoppingbasket/ShoppingBasket";


const Apptest = () => {







    return (

        <>

            <Provider store={store}>

                <Router>

                    <Routes>

                        <Route path='/shop/' element={<Home />} />

                        <Route path='/shop/Home' element={<Home />} />

                        <Route path="/shop/profile" element={<Profile/>}  />

                        <Route path="/shop/products" element={<PrivateRoute><Products/></PrivateRoute>}/>

                        <Route path="/shop/Shoppingbasket" element={<PrivateRoute><Shoppingbasket/></PrivateRoute>} />

                    </Routes>

                </Router>
            </Provider>

        </>
    )
}

export default Apptest