import { useState } from 'react'
import './App.css'

function App() {

    const[formDetails, setFormDetails] = useState({
    firstName : "",
    secondName : "",
    email : "",
    });

    const handleFormInputs = (e)=>{
      const field = e.target.name;
      const value = e.target.value;
      
    // let newFormDetails = {};

    // if(field === "firstName"){
    //   newFormDetails = {
    //     ...formDetails, firstName : value,
    //   }
    // }
    // else if(field === "secondName"){
    //   newFormDetails = {
    //     ...formDetails, secondName : value,
    //   }
    // }
    // else if(field === "email"){
    //   newFormDetails = {
    //     ...formDetails, email : value,
    //   }
    // }

      let newFormDetails = {
        ...formDetails, [field] : value, // field will replace it with the rhs value of field from line 13
      }
    setFormDetails(newFormDetails);
    }

    const validated = formDetails.firstName.length >= 2 && formDetails.secondName.length >= 2 && formDetails.email.length >= 2
 
  return (
    <>
      <div className="container">

        <label htmlFor="firstName">First Name : </label>
        <input
         type="text"
         name = "firstName"
         value={formDetails.firstName}
         onChange={handleFormInputs}
        />
        <label htmlFor="secondName">Second Name : </label>
        <input
         type="text"
         name = "secondName"
         value={formDetails.secondName}
         onChange={handleFormInputs}
        />
        <label htmlFor="email">E-mail: </label>
        <input
         type="text"
         name = "email"
         value={formDetails.email}
         onChange={handleFormInputs}
        />
        <label>Submit: </label>
        <button 
           // disabled={false} 
           disabled={!validated}
        >Submit</button>
      </div>
    </>
  )
}

export default App
