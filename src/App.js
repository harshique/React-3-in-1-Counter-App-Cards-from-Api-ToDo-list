import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Comp, Comp1 } from './myComponent/comp'



function App() {
  const [text,settext] = useState(1)
  function changeVal(op){
    if (op === 1){
     settext(text+1)
    }
    else{
     
     if(text <= 0){
      settext(0)
     }
     else{
      settext(text-1)
     }
    }
   }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className='counter'>
         <button onClick={()=>changeVal(1)}>+</button>
         <p>{text}</p>
         <button onClick={()=>changeVal(0)}>-</button>
      </div>
     
      
    </div>
  );
}

export default App;
