import './App.css'


const Button = ({children, message, onClick}) =>{
      
      // return <button onClick={()=>{
      //   // console.log(message)
      //   onClick()
      // }}>{children}</button>

      return <button onClick={onClick}
      >{children}</button>

    }

const packingList = () => {

}    

function App() {

    function handleChange(event){
      console.log(event.target.value) // event.target -> input tag in this case
    }

    function handleFocus(){
      console.log("in focus")
    }

    function handleBlur(){
      console.log("blurred")
    }

    const handleButtonClick=()=>{
      console.log("clicked")
    }
   
  return (
    <>
      <form onSubmit={(event)=>{
          event.preventDefault()
        }}>

        <label htmlFor="firstName">First Name : </label>
        <input onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} id="firstName" type="text"/>
        <br/>
        <br/>
        <label htmlFor="secondName">Second Name : </label>
        <input onBlur={handleBlur} onChange={handleChange} id="secondName" type="text"/>
        <br/>
        <br/>
        <button>Submit</button>

      </form>

        <br/>
        <br/>

        {/*we can pass a function as a prop as well*/}
        
        <Button onClick={handleButtonClick} message="text">Play Movies</Button>
        <br/>
        <br/>

        <div onClick={(event)=>{
          // console.log(event.target.innerText)
          switch(event.target.innerText){
          case "jeans": 
            console.log("jeans clicked");
            break; // or can use return
          case "chinos": 
            console.log("chinos clicked");
            break;
          case "shirts": 
            console.log("shirts clicked");
            break;
          case "bahamas": 
            console.log("bahamas clicked");
            break;
          case "denims": 
            console.log("denims clicked");
            break;        
          }
        }}>
          <button>jeans</button>
            <br/>
            <br/>
          <button>chinos</button>
            <br/>
            <br/>
          <button>shirts</button>
            <br/>
            <br/>
          <button>bahamas</button>
            <br/>
            <br/> 
          <button>denims</button>
            <br/>
            <br/> 
        </div>

        <select onChange={(event)=>{
          console.log(event.target.value)
        }}>
          <option value="sp1">Spider-Man 1</option>
          <option value="sp2">Spider-Man 2</option>
          <option value="sp3">Spider-Man 3</option>
        </select>
    </>
  )
} 

export default App
