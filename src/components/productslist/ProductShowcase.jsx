import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import{addItem} from '../../redux/reducers/CartReducer'
import axios from "axios";
import Box from '@mui/material/Box';
import ProductGrid from "../productGrid/Productgrid";
import Product from "../product/product";
import PropTypes from 'prop-types';



const ProductShowcase = () => {

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

        <Box
            sx={{
                backgroundColor: 'pink',
                marginX: 4,
                marginY: 8,
                paddingTop: 8,
                borderRadius: 2,
                '@media (min-width: 640px)': {
                    margin: 0,
                },
            }}
        >

            <Typography
                component="h1"
                sx={{
                    textAlign: 'center', // text-center
                    color: 'white', // text-white 
                    fontSize: '2rem', // text-3xl 
                    fontWeight: 'bold', // font-bold 
                }} >
                محصولات شگفت انگیز
            </Typography>


            <ProductGrid products={products} Product={Product} />


        </Box>

    )
}

ProductGrid.propTypes = { products: PropTypes.array.isRequired, Product: PropTypes.elementType.isRequired, };

export default ProductShowcase