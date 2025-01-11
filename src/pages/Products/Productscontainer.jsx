import React, { useState, useEffect } from "react";
import ProductGrid from "../../components/productGrid/Productgrid";
import Product from "../../components/product/product";
import axios from "axios";
import { Container , Typography} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footercontaier";




const Productcscontainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    return (

        <>

        <Navbar/>

        <Container>

            <Typography
                component="h1"
                fontFamily={'gandom'}
                sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    mb: 2,
                    mt:5
                }} >
                محصولات فروشگاه نی نی
            </Typography>

            <ProductGrid Product={Product} products={products} />

        </Container>

        <Footer/>

        </>
        
    )

}

export default Productcscontainer