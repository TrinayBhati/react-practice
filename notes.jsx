// react is a library alone, when combined with routing, animation libraries then it can be called as a framework.
// angular is a framework as it comes with routing, animation libraries and a lot of other things.


// hooks
    // always start with use
    // always call them on the top level of a functional component
        // only exception is custom hooks
function App(){
    useHook(); ✅
    const fun =() =>{
        useHook(); ❌
    }
    return <button onClick={()=> useHook()❌} ></button>
}

//Lifecycle Methods

componentDidMount(){
    // initialized
}
componentDidUpdate(){
    // state updated
}
componentWillUnmount(){
    // destroyed
}

// 1. useState()

const[count, setCount] = useState(0)
       ⬆️       ⬆️              ⬆️     
     Reactive  Setter          Initial 
      value                     value

// 2. useEffect

useEffect(()=>{
    console.log("after updating the dom")

    return () => {
        console.log("clean up function")
    }
}, [])
   ⬆️
Array of dependencies

// 3. useReducer
    

