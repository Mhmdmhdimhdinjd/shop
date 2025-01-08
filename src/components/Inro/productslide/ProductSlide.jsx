import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './ProductSlide.css'
import { SwiperSlide } from "swiper/react";
//import { addItem } from '../redux/reducers/CartReducer';
// import { useDispatch } from 'react-redux';


const ProductSlide = ({product}) => {

    // const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        // dispatch(addItem(product));
        console.log('hnkj')
    };

    return (

        < SwiperSlide key={product.id} product={product} style={{ fontFamily: 'gandom', width: '180px' }}  >

            <Card sx={{ width: 180, bgcolor: 'gray.500', borderRadius: 2, border: 2, borderColor: 'gray.500', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>

                <CardMedia
                    component="img"
                    sx={{
                        width: 160,
                        height: 192,
                        p: 2, pb: 0,
                        objectFit: 'contain',
                        mx: 'auto'
                    }}
                    image={product.image}
                    alt={product.title}
                />

                <CardContent
                    sx={{ px: 2, py: 2, flex: '1 0 auto', height: 140 }}>
                    <Link to={`/ninishop2/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1 }}>

                            {product.title.split(' ').length > 6 ?
                                `${product.title.split(' ').slice(0, 6).join(' ')}...` :
                                product.title}

                        </Typography>
                    </Link>
                </CardContent>



                <div >



                    <Typography
                        sx={{ px: 2, color: 'gray.700' }}
                        variant="body2">
                        ${product.price}
                    </Typography>

                    <Button variant="contained" color="primary" sx={{ borderRadius: 0, fontFamily: 'gandom', width: '100%' }} onClick={() => handleAddToCart(product)} >

                        Add to card

                    </Button>

                </div>

            </Card>

        </SwiperSlide>

    )

}

export default ProductSlide