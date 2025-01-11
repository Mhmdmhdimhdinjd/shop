import React ,{useState} from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '/src/redux/reducers/CartReducer';



const Product = ({ product }) => {

    const [added, setAdded] = useState(false)

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        
        dispatch(addItem(product));

        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 2000);
        
    };


    return (
        <Card sx={{ marginTop: '2rem', minWidth: 230, maxWidth: 280, width: '100%', bgcolor: 'white', borderRadius: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }} >

            <CardMedia
                component='img'
                sx={{
                    width: '100%',
                    maxWidth: 210,
                    objectFit: 'contain',
                    Padding: 2,
                    margin: " 0.5rem auto",
                    maxHeight: '210px'
                }}
                image={product.image}
                alt={product.title}

            />

            <CardContent
                sx={{ px: 2, py: 2, display: 'flex', flexDirection: 'column' }}>

                <Link sx={{ textDecoration: 'none', color: 'inherit' }} to={`/ninishop2/product/${product.id}`}>

                    <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1, textDecoration: 'none', color: 'black' }}>{product.title}</Typography>

                </Link>

            </CardContent>

            <div>

                <Typography
                    sx={{ px: 2, color: 'gray.700' }}
                    variant="body2">
                    ${product.price}
                </Typography>


                <Button variant="contained" color={added ? "success" : "primary"} sx={{ borderRadius: 0, fontFamily: 'gandom', width: '100%' }} onClick={() => handleAddToCart(product)} >

                    {added ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید"}

                </Button>

            </div>


        </Card>
    )
}

export default Product