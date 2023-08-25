// react is a library alone, when combined with routing, animation libraries then it can be called as a framework.
// angular is a framework as it comes with routing, animation libraries and a lot of other things.

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

// hooks
    // always start with use
    // always call them on the top level of a functional component
    // only exception is custom hooks

// 1. useState()
const[count, setCount] = useState(0)

// 2. useEffect
useEffect(()=>{
    console.log("after updating the dom")

    return () => {
        console.log("clean up function")
    }
}, []) //Array of dependencies

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

// for node and browser working - 10th July 2023 recorded session 


//=========================================================================

true ? "print this" : "print that" // this is basic conditional statement

true && "print this" // print this
false && "print this" // false 
"hey" && "sup" // sup
// any truthy valye on lhs it'll always result in rhs

true || false // true
// or checks for truthy value n returns, if not then returns last value

!null // true
!"hey" // false 
// negates 

Boolean("hey") // true  
Boolean(null) // false

  // Array -> map -> Array of jsx elements
  // Array -> filter -> new Array
  // when react jsx array it'll render them one by one

//props passed only from parent to childl  

//=========================================================================

// function components don't have lifecycle methods but useEffect can act like them
useEffect(()=>{},[]); // component did mount
useEffect(()=>{}); // component did update
useEffect(()=>{},[a]); // combination of shouldCOmponentUpdate and componentDidUpdate
useEffect(()=>{
    return anything; // clean-up acts as componentWillUnmount
},[]); 

//=========================================================================

