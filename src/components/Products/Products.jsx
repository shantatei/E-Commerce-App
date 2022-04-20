import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5' ,image :'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdoaXRlJTIwc2hvZXN8ZW58MHx8MHx8&w=1000&q=80'},
//     { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10' ,image :'https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg'}
// ]
const Products = ({products, onAddToCart}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} m={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>

    )


}

export default Products;