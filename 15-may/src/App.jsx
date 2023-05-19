import { useState } from 'react'
import './App.css'

function App() {

   const [university, setUniversity] = useState(""); 
   function handleInputChange(e){
    setUniversity(e.target.value);
   }

   const [ name , setName] = useState("Trinay Bhati");
   const [ age , setAge] = useState(23); 
   const [ city , setCity] = useState("Delhi");
   const [ country , setCountry] = useState("India"); 
   const [ occupation , setOccupation] = useState("Dev");
   const [ hobbies , setHobbies] = useState("Animes"); 
   const [ education , setEducation] = useState("Graduate"); 

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

   const Mapping = {
    Occupation(){
      setOccupation("none");
    },
    Hobbies(){
      setHobbies("Drawing")
    } 
   }

   const updateUserDetails = (field) =>{
    Mapping[field]();
    // refer to the notes on object notation square bracket calling methods
   }

   const Tapping = {
    Education(){
      setEducation("Fourth Grade");
    },
   }

   const updateUserDeets = (e) =>{
    let field = e.target.id;
    Tapping[field]();
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
        <p>City : {city}</p>
        <p>Country : {country}</p>
        <p>Occupation : {occupation}</p>
        <p>Hobbies : {hobbies}</p>
        <p>Education : {education}</p>

        <hr/>
        <button onClick={()=>{
          setName("Shourya Bhati")
        }}>Change Name</button>
            <br/>
        <button onClick={()=>{
          setAge("8")
        }} >Change Age</button>
            <br/>
        <button onClick={()=>{
          updateDetails("City")
        }} >Change City</button>
            <br/>
        <button onClick={()=>{
          updateDetails("Country")
        }}>Change Country</button>
            <br/>
        <button onClick={()=>{
          updateUserDetails("Occupation")
        }}>Change Occupation</button>
            <br/>
        <button onClick={()=>{
          updateUserDetails("Hobbies")
        }}>Change Hobbies</button>
            <br/>
        <button id="Education"onClick={updateUserDeets}>Change Education</button>
      </div>
    </>
  )
}

export default App
