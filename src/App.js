import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Counterview from './components/counterview';
import CounterContextProvider from './context/CounterContext';


function App() {
  return (
    <CounterContextProvider>
    <div className="App">
        <Counter/>
        <Counterview/>
    </div>
    </CounterContextProvider>
  );
}

export default App;
