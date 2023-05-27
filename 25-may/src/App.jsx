import { useState } from 'react'
import {useEffect} from'react'
import './App.css'


function MouseCoords() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(event) {
      console.log("Inside handleMouseMove function");
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <h1>
      {mousePosition.x} / {mousePosition.y}
    </h1>
  );
}

function WindowSize (){
  const[windowDimension, setWindowDimension] = useState({
    height : window.innerHeight, 
    width :  window.innerWidth,
  })
  const{height, width} = windowDimension;
  useEffect(()=>{
    function handleWindowSize(e){
      setWindowDimension({height : window.innerHeight, width : window.innerWidth})
      // would also work with event.target as target is window object rn
    }
    window.addEventListener('resize', handleWindowSize)
    return()=>{
       window.removeEventListener('resize', handleWindowSize)
    }
  }, [])
  return <h1>{height}/{width}</h1>
}

function App() {

  const[count, setCount]= useState(0);
  const[formDetails, setFormDetails] = useState({
    firstName : "",
    email : "",
    phoneNumber :"",
  });
  // const[mousePos, setMousePos] = useState({
  //   x:0,
  //   y:0,
  // })
  const [showMouseCoords, setShowMouseCoords] = useState(true);

  const {firstName,email,phoneNumber} = formDetails

  const handleFormChange = (e) =>{
    setFormDetails({...formDetails, [e.target.name] : e.target.value})
  }
  // console.log("phone" , phoneNumber )

  useEffect(()=>{
    console.log("email")
  },[email,phoneNumber])

  useEffect(()=>{
    document.title = "sup"
  },[]);

  // const handleMouseMove = (e) => {
  //   setMousePos({x : e.clientX, y: e.clientY})
  // }

  // useEffect(()=>{
  //   window.addEventListener('mousemove', handleMouseMove);
  // },[]);


  return (
    <>
      <main onChange={handleFormChange}>
       <h1>Count : {count}</h1>
       <button onClick={()=>{ setCount(count+1) }}>Increment</button>
       <input 
       type="text"
       placeholder="First Name"
       name="firstName"
       value={firstName}
       />
       <input 
       type="email"
       placeholder="Email"
       name="email"
       value={email}
       />
       <input
       type="number"
       placeholder="Phone Number"
       name="phoneNumber"
       value={phoneNumber}
       />
      </main> 
      {/*<h1>{mousePos.x} || {mousePos.y}</h1>*/}

      {showMouseCoords && <MouseCoords />}
      <button onClick={() => setShowMouseCoords(false)}>
        Stop showing Mouse Coords!
      </button>
      <WindowSize/>
    </>
  )
}

export default App
