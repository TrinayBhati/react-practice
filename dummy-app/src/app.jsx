// component is a function
// function App(){
//     // component is a function started with a capital letter
//     return <h1>Hello React!</h1>
// }

// export default App;
// jsx - javascript xml

let App = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <h2>Starting with react</h2>
      <button>LFG</button>
      <Header />
    </div>
  );
};

export { App };

let Header = () => {
  return (
    <>
      <h1>Hello!</h1>
    </>
  );
};
// always return one top level element if use fragments these - <></> instead of div if not needed, when we just want to group elements under one
// if want to use any reserved keywords like for in html then use htmlFor and use className instead of class
