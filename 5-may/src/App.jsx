import './App.css'


// const Button = ({label}) =>{
  const Button = (props) =>{

  //props = { label : "whatever is passed", children : undefined by default}

  return (
    // <button> {label}</button>  
       <button> {props.children}</button>
    )
}

// const Input = (props) =>{ 
const Input = ({className = "",...restProps }) =>{ 
  
  // while spreading like this doesn't matter how many props the app sends it'll def work out, and we can define some props ourselves, if ap wants to overrride them it can also happen, adding own props before spreading will give app access to override if we use props after spreading then not
  
  // return <input className="style" {...props} />
  
  //incase we want to use 2 class names
    
    return <input className="style" {...restProps} className ={`input ${className}`} />
}

const Simple = (props) =>{
  console.log(props);
  return <h2>{props.movie}</h2>
}

  // props can be passed only from parents to child
  // props are immutable, child can never change prop only use it 

const Layout = ({children}) =>{
  return (
    <div>
      <h2>Waddup</h2>
      {children}
    </div>
    
    )
}

function App() {

  const simpleProps = {
    movie : "Duke",
    actor : "Timoothy",
    rating : 9,
  }

  return (
    <>

      {/*<Button label="Click Me"/>
      <Button label="Increment"/>
      <Button label="Smash"/>*/}

      {/*<Button> Sup </Button>*/}
      
      <Layout>
      <Button> Sup </Button>
        Basics
      </Layout>
      <Input type="text"/>

      {/*all of the props we pass in text will be spread in the input and can be used*/}

      <Simple {...simpleProps}/>
    </>
  )
}

export default App
