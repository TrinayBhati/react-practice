import { useState, useEffect } from 'react'
import './App.css'
  
//initial render -> render -> effect
//subsequent render -> render -> cleanup -> effect
//unmount -> cleanup
  
  const MouseTracker= ()=>{

    const [isEnable, setIsEnable] = useState(true);
    const [mousePos, setMousePos] = useState({
      x : 0,
      y : 0,
    })

    const handleMouseMove = (e) =>{
      setMousePos({x : e.clientX , y : e.clientY})
    }

    useEffect(()=>{
      if(isEnable){
        window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
       }; 
       // works if I put cleanup in if or outside of if
      }
    },[isEnable])

        const toggleMouse = () =>{
      setIsEnable(!isEnable);
    }

    return(
      <div> 
         <h1>{mousePos.x} / {mousePos.y}</h1>
         <button onClick = {toggleMouse} >Mouse Tracking : {isEnable ? "on" : "off"}</button>
      </div>
      )
  }

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("count value is ", count);
    return ()=>{
      console.log("cleanup", count)
    }
  });

  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>{
        setCount(count+1)
      }}>increment</button>
      <MouseTracker/>

    </>
  )
}

export default App
