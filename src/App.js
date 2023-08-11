import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'

function App() {
 const [count, setCount]= useState(0);

 const increment=()=>{
  setCount(count+1);
 }
 const decrement=()=>{
setCount(count-1);
 }
  return (
  <div className="d-flex justify-content-center alignitems-center bg-dark" style={{height:"100vh"}}>
   <div>
    <h1 className="text-success text-center">{count}</h1>
    <div className='d-flex gap-2'>
      <button className="btn btn-primary"  style={{width:"200px"}} onClick={increment}>+</button>
      <button className="btn btn-primary"  style={{width:"200px"}} onClick={decrement}>-</button>
    </div>
   </div>
  </div>
  );
}

export default App;
