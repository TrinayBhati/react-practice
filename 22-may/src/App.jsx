import { useState } from 'react'
import './App.css'

  const newAge = () =>{
    return{id:2};
  }

  const Child = () =>{
    console.log("Child Rendering");
    return <h1>Unnecessary Rendering</h1>
  }  

/*function App() {

  const change = ()=>{
    return {name : "Trinay"};
  }
  const[count, setCount] = useState(0)
  const[user, setIUser] = useState({
    id:1,
  })
  const[name, setName ] = useState(change());
  const[age, setAge ] = useState(newAge);
  const handleClick = () =>{
    setCount(count+1)
  }

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={handleClick}>Increment</button>
      <h2>User ID : {user.id}</h2>
      <h2>Name : {name.name}</h2>
      <h2>Age : {age.id}</h2>
      <Child/>
    </>
  )
}*/

  function App(){

    const[shapes, setShapes] = useState([0]);
    const addShape = ()=>{
      const lastNumber = shapes[shapes.length -1];
      const nextNumber = lastNumber + 1;
      setShapes([...shapes,nextNumber])
    } 
    return(
      <div>
      <select onChange={(e)=>{
        console.log(e.taret.value)
      }}>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
      </select>
        <button onClick={addShape}>ADD Shape</button>
      {shapes.map((shape)=>(
        <div>{shape}</div>
      ))}  
      </div>
      )
  }

export default App
