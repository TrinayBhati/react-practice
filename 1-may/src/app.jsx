// component is a function that returns a html markup
// function App(){
//     // component is a function started with a capital letter
//     return <h1>Hello React!</h1>
// }

// export default App;
// jsx - javascript xml

import Button from "./components/buttons"; // whe we have .jsx file in react there's no compulsion to use extension
// can't add object as an expression in jsx in {}
import "./App.css"

let App = () => {
const object = {
      imageSource : "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg",
      description : "BAYC",
}
const disable = "yes";
const greet = "sup"
const userName = "Trinay";
const score = 10000;
const elem = <h2>KABOOM</h2>;
const textStyle = {
  color : "red",
  fontSize : 45,
}
const imgStyle = {
  backgroundColor : "lightblue",
}
  return (
    <div className="container">
      <h1>Hello React!</h1>
      <h2>Starting with react</h2>
      <Button/>
      <h2>Ending with react</h2>
      <img style ={imgStyle}src={object.imageSource} alt={object.description}/>
      <button disabled={disable == "yes"? true : false}>Click</button>
      <h2 style={textStyle}>{greet} folks</h2>
      {elem}
      {score}
      {userName}

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
