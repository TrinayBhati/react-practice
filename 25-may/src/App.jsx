import { useState } from 'react'
import {useEffect} from'react'
import './App.css'

function App() {

  const[count, setCount]= useState(0);

  const[formDetails, setFormDetails] = useState({
    firstName : "",
    email : "",
    phoneNumber :"",
  });
  const {firstName,email,phoneNumber} = formDetails

  const handleFormChange = (e) =>{
    setFormDetails({...formDetails, [e.target.name] : e.target.value})
  }
  console.log("phone" , phoneNumber )

  useEffect(()=>{
    document.title = "sup"

  },[]);



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
    </>
  )
}

export default App
