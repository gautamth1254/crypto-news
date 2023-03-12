import React, { createContext,useContext,useState,useEffect } from 'react'

const Crypto = createContext();

const Cryptocontext = ({children}) => {

  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if(currency === "INR") setSymbol("₹");
    else if(currency === "USD") setSymbol("$");
  }, [currency])
  
  return (
    <Crypto.Provider value={{currency,symbol,setCurrency}}>{children}</Crypto.Provider>   
  )
}

export default Cryptocontext;

export const CryptoState = () =>{
    return useContext(Crypto)
}

// Finally, the CryptoState component is exported, which allows
// any child components to access the Crypto context using 
// the useContext hook.



// react context api is that api which parent provide data to specific children without traversion the props to all children 

// So, React hooks provides a concept call Context.

 //React Context API allows you to easily access data at different levels of 
 //the component tree, without passing prop to every level
// <div>Cryptocontext</div>