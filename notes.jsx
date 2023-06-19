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
    

1. Action Creator -> function, returns Action
2. Action -> object, gotta have type property
3. Dispatch -> function, takes action as args and returns to all the reducer
4. Reducers 
5. State -> combination of all the reducer data








// React Basic Working

<div id="main">
    <span className="active"> Hello </span>
    <span > World </span>
</div>

React.createElemet("div", {id : "main"
    children : [
        React.createElemet("span", {className : "active"}, "Hello"),
        React.createElemet("span", null , "World"),
    ]
}, null)

{
    type : "div",
    key : null,
    ref : null,
    props : {id : "main", children},
    _owner : null,
    _store : {}
}

virtual dom is a lightweight representation of dom
    virtual dom consists od react elements, unlike dom which is made up of html elements
