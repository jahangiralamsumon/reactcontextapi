import {useState,createContext } from "react";

export const CounterContext = createContext();


function CounterContextProvider(props) {
    const [counter,setCounter] = useState(0)

    const increment = () =>{
      setCounter(counter+1);
    }
  
    function decrement (){
      setCounter(counter-1);
    }

   const value = {counter,increment,decrement};
   
    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );


    
}

export default CounterContextProvider;