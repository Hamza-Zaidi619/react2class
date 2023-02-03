import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// let mobile=[
//   {
//     name:"s4",
//   },
//   {
//     model:"2019"
//   }

// ]
// let arr =[
//   {
//     name: "a30",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 2000,
//     brand: "samsung",
//   },
//   {
//     name: "note10",
//     ram: "6gb",
//     rom: "128gb",
//     camera: "50px",
//     price: 4000,
//     brand: "samsung",
//   },
//   {
//     name: "s10",
//     ram: "3gb",
//     rom: "128gb",
//     camera: "10px",
//     price: 5000,
//     brand: "samsung",
//   },
//   {
//     name: "iphone4",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "iphone",
//   },
//   {
//     name: "iphone4s",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 20000,
//     brand: "iphone",
//   },
//   {
//     name: "iphone5",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 30000,
//     brand: "iphone",
//   },
//   {
//     name: "iphone6",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 30000,
//     brand: "iphone",
//   },
//   {
//     name: "redminote10",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "redminote11",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "redmi10",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "redmi10pro",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "xiaomi",
//   },
//   {
//     name: "a3s",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "oppo",
//   },
//   {
//     name: "a3s",
//     ram: "4gb",
//     rom: "64gb",
//     camera: "50px",
//     price: 10000,
//     brand: "Realmi",
//   },
// ]
function App() {
  const[count,setCount]= useState(0);
  const[arr,setArr]= useState(["hamza" ," " ,"Zaidi"]);
  const[text,setText]=useState('')

  let add = ()=>{
    //  setCount(count+1)
    // arr.push("DUMMY TEXT");
    arr.push(text)
    console.log(arr);
    setArr([...arr]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT2</h1>
    {
    arr.map((x,i)=><p>{x}</p>)
    }
   <input onChange={(e)=>{
    setText(e.target.value)
   } }
   placeholder="Enter"/> 
   <p>{text}</p>
    <button onClick={add}>Add</button>

 
      </header>
    </div>
  );
}

export default App;
    //last class assignment
// {arr.map((x,i)=>{
//   return (
//     // last class assignment
//     <div key={i} className="card">
//       <h3>NO:{i+1}:{x.brand}</h3>
//       <p>{x.name}</p>
//       <p>PRICE PKR:{x.price}</p>
//       <p>RAM:{x.ram}</p>
//       <p>ROM:{x.rom}</p>
//     </div>
//   );
   
  
//  })}
/* <p>{count}</p>
<button onClick={add}>Add</button> */