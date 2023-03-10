import { 
    AppBar,
    Container,
    Typography,
    Toolbar,
    Select,
    MenuItem,
    makeStyles,
    createTheme,
    ThemeProvider
} from '@material-ui/core'


import React from 'react'
import { useNavigate } from 'react-router-dom';

 const useStyles = makeStyles(() => ({
        title: {
            flex:1,
            color: 'gold',
            fontfamily: 'Roboto Condensed',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
    }))

const Header = () => {

   // use the style of useStyles
   const classes = useStyles();

   //for navigation to home page
   const navigate = useNavigate();

//    const darkTheme = createTheme({
//         palette: {
//             primary: {
//                 main:"#fff",
//             },
//         type:"dark",
//         },
//    });


  return (
    // <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography onClick={()=>navigate('/')} className={classes.title} >Crypto News</Typography>
                    <Select varient='outlined' style={{width:100,height:40,marginLeft:15}}>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'INR'}>INR</MenuItem>   
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    // </ThemeProvider>
  )
}

export default Header