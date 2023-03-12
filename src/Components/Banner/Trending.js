import { makeStyles } from '@material-ui/core'
import React from 'react'
import Cryptocontext from '../../Cryptocontext';

const useStyles = makeStyles(()=>({
    trending:{
        height: '50%',
        display: 'flex',
        alignItems:'center',
    },
}));


const Trending = () => {

    const classes = useStyles();
    const {currency} = CryptoState();
    

    return (
        <div className={classes.trending}>Trending</div>
    )
}

export default Trending