import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './Components/Header'
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({  // make a call back in inside it make a classes
      App : {
        backgroundColor : 'red',
        color: 'white',
        minHeight:"100vh", 
      },
    }));


function App() {
  

    

    const classes = useStyles()

    return (

   <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} exact />
          <Route path="/coins/:id" element={<Coinpage/>} /> 
        </Routes>       
      </div>

   </BrowserRouter>
  );
}

export default App;
