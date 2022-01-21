import {useContext} from 'react';
import { CounterContext } from '../context/CounterContext';



const Counterview = () => {
   const {counter} = useContext(CounterContext);
       
  return <div style={{backgroundColor:'red'}}>{counter}</div>;
};

export default Counterview;
