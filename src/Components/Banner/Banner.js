import { Typography,Container,makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(()=> ({
    banner:{
        backgroundImage: "url(./cryptophoto.jpeg)",
    },
    bannerContent:{
        height:500,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent: "space-around",
    },
    tagline:{
        height:"40%",
        display:"flex",
        flexDirection:"column",
        textAlign: "center",
        justifyContent: "center",
    }
}));

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
          variant='h2'
          style={{
            fontWeight: 'bold',
            paddingBottom: 15,
            fontFamily: "Roboto Condensed",
          }}>   Crypto-news
          </Typography>

          <Typography
          variant='subtitle2'
          style={{
            color: 'darkgrey',
            textTransform: "capitalize",
            fontFamily: "Roboto Condensed",
          }}>   welcome to the new world of news
          </Typography>

        </div>
      </Container>
    </div>
  )
}

export default Banner