import React,{useState} from 'react';
import  './App.css'

const App = ()=>{
    const[count,setCount] = useState(0)


   
    return(
        <div>
           <header>
               <h1>counter using state/hooks</h1>
               <h2>{count}</h2>
               <button onClick={()=>setCount(0)}>Reset</button>
               <button onClick={()=>count>=100?"":setCount(count+1)}>Increment</button>
               <button onClick={()=>count <=0?"":setCount(count-1)}>Decrement</button>

           </header>
        </div>
    )
}
export default App 