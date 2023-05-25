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
  });

  // const onSubmit = () =>{
  //   const{firstName, secondName, email} = formDetails;

  //   const firstNameError = firstName.length < 3 && "First Name must contain atleast 3 characters"
  //   const secondNameError = secondName.length < 3 && "Second Name must contain atleast 3 characters"
  //   const emailError = email.length < 3 && "Email must contain atleast 3 characters"

  //   if(firstNameError || secondNameError || emailError){ // if any of these is true
  //      setFormErrors({
  //      firstNameError,
  //      secondNameError,
  //      emailError,
  //    });
  //   }

  // }

  // const handleFormInputs = (e)=>{
  //     const field = e.target.name;
  //     const value = e.target.value;
  // let newFormDetails = {
  //       ...formDetails, [field] : value, // field will replace it with the rhs value of field from line 13
  //     }
  //   setFormDetails(newFormDetails);
  //   }

  const handleFormInputs = (e) =>{
    const field = e.target.name;
    const value = e.target.value;

    const firstNameError = field == "firstName" && value.length < 3 && "First Name must contain atleast 3 characters"
    const secondNameError = field == "secondName" && value.length < 3 && "Second Name must contain atleast 3 characters"
    const emailError = field == "email" && value.length < 3 && "Email must contain atleast 3 characters"

    if(firstNameError || secondNameError || emailError){
      setFormErrors({
        firstNameError,
        secondNameError,
        emailError,
      });

    }
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
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
        // onClick={onSubmit}
        >Submit</button>
      </div>
    </>
  )
}

// Asynchrounous State Updates

/*function App() {

  const [count, setCount] = useState(0);

  const handleCount = () =>{
    let nextCount = count+1
    setCount(nextCount);
    console.log(nextCount);
  }

  return (
    <>
    <h2>you've clicked {count} times</h2>
    <button onClick={handleCount}>Click Me</button>
    </>
  )
}*/

export default App
