import { useState,useContext } from "react";
import { CounterContext } from "../context/CounterContext";


export default function Counter() {

//   const [counter,setCounter] = useState(0)
//   const increment = () =>{

//     setCounter(counter+1);
//   }

//   function decrement (a){
//     console.log(a)
//     setCounter(counter-1);
//   }

const {counter,increment,decrement} = useContext(CounterContext)

  return (<div>
      <div style={{backgroundColor: 'yellow'}}>{counter}</div>
      <button style={{padding: '5px',margin:'10px' }} onClick={increment}>Increment+</button>
      <button style={{padding: '5px' }} onClick={()=>decrement(1)}>Decrement-</button>
      </div>);
}
