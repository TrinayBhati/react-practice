import { useState } from 'react'
import './App.css'

function App() {


  const[formDetails, setFormDetails] = useState({
    firstName : "",
    secondName : "",
    email : "",
    });

  const [formErrors, setFormErrors] = useState({
    firstNameError : "", 
    secondNameError : "",
    emailError : "",
  })

  const handleFormInputs = (e)=>{
      const field = e.target.name;
      const value = e.target.value;
let newFormDetails = {
        ...formDetails, [field] : value, // field will replace it with the rhs value of field from line 13
      }
    setFormDetails(newFormDetails);
    }

  return (
    <>
      <div className="container">

        <label htmlFor="firstName">First Name : </label>
        <div>
          <input
           type="text"
           name = "firstName"
           value={formDetails.firstName}
           onChange={handleFormInputs}
          />
          { formErrors.firstNameError && <p>{formErrors.firstNameError}</p> }
        </div>
        <label htmlFor="secondName">Second Name : </label>
        <div>
          <input
           type="text"
           name = "secondName"
           value={formDetails.secondName}
           onChange={handleFormInputs}
          />
          { formErrors.secondNameError && <p>{formErrors.secondNameError}</p> }
        </div>
        <label htmlFor="email">E-mail: </label>
        <div>
          <input
           type="text"
           name = "email"
           value={formDetails.email}
           onChange={handleFormInputs}
          />
          { formErrors.emailError && <p>{formErrors.emailError}</p> }
        </div>
        <label>Submit: </label>
        <button 
           
        >Submit</button>
      </div>
    </>
  )
}

export default App
