import { useState } from 'react'
import './App.css'

function App() {

   const [university, setUniversity] = useState(""); 
   function handleInputChange(e){
    setUniversity(e.target.value);
   }

   const [ name , setName] = useState("Trinay Bhati");
   const [ age , setAge] = useState(23); 
   const [ City , setCity] = useState("Delhi");
   const [ Country , setCountry] = useState("India"); 

   const updateDetails = (field) =>{
    switch(field){
    case "City": 
      setCity("dunno");
      return;
    case "Country" : 
    setCountry("no idea");  
    return;
    }
   }

  return (
    <>
      <h1>Hello</h1>
      <form>
        <label htmlFor="univInput">University : </label>
        <input onChange={handleInputChange} value={university} type="text" id="univInput"/>
        <p>Output : {university.toUpperCase()} </p>
        <hr/>
      </form>
      <div>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>City : {City}</p>
        <p>Counry : {Country}</p>

        <button onClick={()=>{
          setName("Shourya Bhati")
        }}>Change Name</button>

        <button onClick={()=>{
          setAge("8")
        }} >Change Age</button>

        <button onClick={()=>{
          updateDetails("City")
        }} >Change City</button>

        <button onClick={()=>{
          updateDetails("Country")
        }}>Change Country</button>
      </div>
    </>
  )
}

export default App
