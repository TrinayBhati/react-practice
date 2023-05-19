import { useState } from 'react'
import './App.css'

function App() {

  const[firstName, setFirstName] = useState("");
  const[secondName, setSecondName] = useState("");
  const[email, setEmail] = useState("");

  // const handleFirstNameChange = (e) => {
  //   setFirstName(e.target.value)
  // }
  // const handleSecondNameChange = (e) => {
  //   setSecondName(e.target.value)   
  // }vent
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value)   
  // }

  // const handleFormInputs = (field, value) =>{
  //   if(field == "firstName"){
  //     setFirstName(value);
  //   }
  //   else if(field == "secondName"){
  //     setSecondName(value);
  //   }
  //   else if(field == "email"){
  //     setEmail(value);
  //   }    
  // };

  //   const handleFormInputs = (field, value) =>{
  //   if(field == "firstName"){
  //     setFirstName(value);
  //     return;
  //   }
  //   if(field == "secondName"){
  //     setSecondName(value);
  //     return;
  //   }
  //   if(field == "email"){
  //     setEmail(value);
  //     return;
  //   }    
  // };

  // const Mapping = {
  //   firstName : setFirstName,
  //   secondName : setSecondName,
  //   email : setEmail,
  // };

  const Mapping = {
    firstName : setFirstName,
    secondName : setSecondName,
    email : setEmail,
  };

  // const handleFormInputs = (field, value) =>{
  //   const set = Mapping[field];
  //   set(value);
  // };

  const handleFormInputs = (event) =>{
    const field = event.target.name;
    const value = event.target.value;
    const set = Mapping[field]; // refer to object notes 
    set(value);
  };


  return (

    <div className="container">

       <label htmlFor="firstName">First Name : </label>
       <input 
          id="firstName"
          // onChange={handleFirstNameChange}
          // onChange = {(event) => {handleFormInputs("firstName", event.target.value )}}
          onChange = {handleFormInputs}
          name = "firstName"
          placeholder="First"
          type="text"
          // value={firstName}/>
          value={firstName}/>
       <label htmlFor="secondName">Second Name : </label>
       <input 
          id="secondName"
          // onChange={handleSecondNameChange}
          // onChange = {(event) => {handleFormInputs("secondName", event.target.value )}}
          onChange = {handleFormInputs}
          name = "secondName"
          placeholder="Second"
          type="text"
          // value={secondName}/>
          value={secondName}/>
       <label htmlFor="emailName">E-mail : </label>
       <input 
          id="emailName"
          // onChange={handleEmailChange}
          // onChange = {(event) => {handleFormInputs("email", event.target.value )}}
          onChange = {handleFormInputs}
          name = "email"
          placeholder="Mail"
          type="email"
          // value={email}/>
          value={email}/>

     
    </div>
  )
}

/*function App(){

  const [numbers, setNumbers] = useState([1]);

  const add = () =>{
    const lastNumber = numbers[numbers.length - 1];
    const nextNumber = lastNumber + 1;
    // numbers.push(nextNumber);
    const newNumbers = [...numbers, nextNumber];
    setNumbers(newNumbers)
  }

  return(
    <div> 
      <section>
        {numbers.map((number)=>(
          <h3>{number}</h3>
        ))}
      </section>
      <button onClick={add}>Add</button>
    </div>
    );
};*/

export default App
