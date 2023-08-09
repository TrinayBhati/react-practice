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

// virtual dom is a lightweight representation of dom virtual dom consists of react elements, unlike dom which is made up of html elements

//=========================================================================

// for node and browser working - 10th July 2023 recorded session 

// react working and basics convo - https://chat.openai.com/share/0716abc7-9a6f-43bf-8e2c-390dd81f9517

// 1. Virtual DOM: React uses a lightweight in-memory representation of the real web page DOM called the Virtual DOM. It tracks state changes and computes efficient updates for rendering.

// 2. Components: React breaks UI into reusable pieces called components, which can be functional or class-based. Functional components return JSX, while class-based components define a render method.

// 3. Rendering: React starts rendering from a top-level component, generating JSX elements to build the Virtual DOM.

// 4. Reconciliation: After rendering, React compares previous and new Virtual DOMs to find minimal changes needed, enhancing performance.

// 5. Updating State and Props: Components have mutable state and immutable props. Changes in either trigger re-rendering and a new reconciliation process.

// 6. Component Lifecycle: Components follow a lifecycle with methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` for specific actions during their lifespan.

// 7. One-way Data Flow: Data flows uni-directionally, from parent to child components via props, with callbacks for child-to-parent communication.

// 8. Event Handling: Events are handled declaratively by attaching handlers to JSX elements, triggering Virtual DOM updates and re-renders.

// 9. Conditional Rendering: React allows dynamic UIs by conditionally rendering components or elements based on state or conditions.

//=========================================================================

// Babel:

// - Compilation: Babel compiles modern JavaScript to older versions (ES6+ to ES5) for browser compatibility.
// - JSX Transformation: Babel transforms JSX to regular JavaScript function calls.
// - Plugin System: Babel's modular design uses plugins for customizable transformations.

// Reconciliation Algorithm:

// - Virtual DOM Diffing: React compares new Virtual DOM with the previous one.
// - Element-Level Diffing: React fine-grainedly compares components, not just the whole tree.
// - Keys: `key` attribute helps track changes in lists or repeated elements.
// - Reusing Components: React reuses components for efficiency.
// - Batched Updates: React applies multiple updates together for better performance.
// - Priority Updates: React prioritizes crucial UI updates.

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