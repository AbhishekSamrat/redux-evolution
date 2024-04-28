import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import './home'

function App() {
  const [dataa,setdataa] = useState(0)
  let data = 0
  const handleincrement=()=>{
    setdataa(dataa + 1)
  }

  const handledecrecrement=()=>{
    setdataa(dataa-1)
  }
  return (
    <div className="App">
   

    <h1>Counter App</h1>
       <h1>{dataa} </h1>
  
       <button onClick={handleincrement}>Increment</button>
       <button onClick={handledecrecrement}>Decrement</button>
       
    </div>
  );
}

export default App;
