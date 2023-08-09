==========================Prop.jsx===============================
import "./App.css";
// Props
// Big topic in react
// Very very commonly used (Almost every component)

// Before moving on to Props, let's talk about functions

// A non-dynamic function (Static Function)
// function greet() {
//   return `Hey, How are you, Aditya ?`;
// }

// greet()

// A dynamic function
// function greet(userName) {
//   return `Hey, How are you, ${userName} ?`;
// }

// greet("Aditya");
// greet("Trinay");
// greet("Mohammad");

// Props is an idea which is inspired from above
// Props -> Properties
// They are properties which you can pass into a Component
// Just like how you pass an argument to a function,
// you can pass a prop to component

// Biggest advantage of Props -> RE-USE COMPONENTS!

// const OneplusCard = () => (
//   <div className="card">
//     <h2 className="title">One Plus</h2>
//     <h3>Beam Blue, In the Ear</h3>
//   </div>
// );

// const BoatCard = () => (
//   <div className="card">
//     <h2 className="title">boAT Rockerz</h2>
//     <h3>White Purity, On the Ear</h3>
//   </div>
// );

// props parameter here can be named ANYTHING
const ProductCard = (props) => {
  // Good practice to use destructuring here
  // Otherwise you'll keep doing props.this, props.that
  const { productName, description } = props;
  return (
    <div className="card">
      <h2 className="title">{productName}</h2>
      <h3>{description}</h3>
    </div>
  );
};

// export const App = () => {
//   return (
//     <div className="container">
//       <ProductCard
//         productName="boAT Rockerz"
//         description="White Purity, On the Ear"
//       />
//       <ProductCard
//         someotherName="Oneplus earbuds"
//         description="Beam Blue, In the Ear"
//       />
//     </div>
//   );
// };

// Behind the scenes :
 
<ProductCard
  productName="boAT Rockerz"
  description="White Purity, On the Ear"
/>
React creates a SINGLE object of properties :
props -> {
  productName: "boAT Rockerz",
  description: "White Purity, On the Ear"
}
props will be passed as an argument to the ProductCard component


// Just like how you call the same function again
// by passing in different arguments ->
// You can use the same component again, by passing in
// different props

/* ------------------- Creating a component for Accordion ------------------- */

// Destructure in function parameter
// const Accordion = ({ title, label }) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <form>
//         <div>
//           <input type="checkbox" />
//           <label>{label}</label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export const App = () => {
//   return (
//     <div>
//       <Accordion title="DISCOUNT" label="50% or more" />
//       <Accordion title="MICROPHONE PRESENT" label="Yes" />
//     </div>
//   );
// };

/* ------------------ Props - Types ----------------- */

const UserProfile = (props) => {
  // Nested desctructuring
  const {
    user: { name, age, isMarried, hobbies, location },
  } = props;

  // One way of nested destructuring
  // const { name, age, isMarried, hobbies, location } = user;

  // Comments OUTSIDE JSX
  // first way
  /* second way */

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age} </p>
      {/* Comments INSIDE JSX */}
      {/* Conditionally rendering the paragraph tag based on isMarried prop */}
      {isMarried && <p>Married: Yes </p>}
      <p>Hobby : {hobbies[0]}</p>
      <p>City : {location.city}</p>
      <p>Country : {location.country}</p>
    </div>
  );
};

export const App = () => {
  return (
    <main>
      <UserProfile
        // If you want to send individual props :
        // userName="Eric"
        // age={20}
        // isMarried={true}
        // hobbies={["Singing", "Sleeping"]}
        // userLocation={{ city: "Paris", country: "France" }}

        // If you want to send all props as one object
        user={{
          name: "Eric",
          age: 20,
          isMarried: true,
          hobbies: ["Singing", "Sleeping"],
          location: { city: "Paris", country: "France" },
        }}
      />
    </main>
  );
};

/* --------------------- Conditional rendering via props -------------------- */

const UserChatCard = ({ user, isOnline }) => {
  // Based on the requirement of the UI, you can choose the conditional rendering
  // strategy
  if (!isOnline) {
    return <p>{user} Not online!</p>;
  }

  return (
    <div className="user-chat-card-container">
      <h3>{user}</h3>

      {/* Circle Online Indicator */}
      {/* {isOnline && <span className="green-dot" />} */}
      <span className="green-dot" />
    </div>
  );
};

export const App = () => {
  return (
    <main>
      <UserChatCard user="Aditya" isOnline={true} />
      <UserChatCard user="Abdur" isOnline={false} />
      <UserChatCard user="Afroj" isOnline={false} />
    </main>
  );
};







=========================App.css==================================






body {
  margin: 0;
}

h3 {
  margin: 0;
}

.user-chat-card-container {
  display: flex;
  align-items: center;
  border: 2px solid #ddd;
  width: 150px;
  justify-content: space-around;
}

.green-dot {
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #16ff00;
}

main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}