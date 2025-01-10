import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardMedia, CardContent, Typography ,Box } from '@mui/material';
import { addItem } from '/src/redux/reducers/CartReducer';
import { useDispatch } from 'react-redux';


const ProductSlide = ({product}) => {

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

        < Box  style={{ fontFamily: 'gandom', width: '180px' }}  >

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

                    <Link sx={{ textDecoration: 'none', color: 'inherit' }} to={`/ninishop2/product/${product.id}`}>

                        <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1 , color:'black'}}>

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

                    <Button variant="contained" color={added ? "success" : "primary"} sx={{ borderRadius: 0, fontFamily: 'gandom', width: '100%' }} onClick={() => handleAddToCart(product)} >

                    {added ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید"}

                    </Button>

                </div>

            </Card>

        </Box>

    )

}

export default ProductSlide