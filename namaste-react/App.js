

		const heading = React.createElement("h1", {
			id : "title"
		}, "Hello World from React");
			// need to specify that this root is the base element, so we use ReactDOM the api given to do this work
				// tag attributes passed in object

				// console.log(heading); 
				// shows object made by react 

			// 1st is the tag, 2nd is the attribute obect, 3rd is what we put inside can use array for more elements

		const root = ReactDOM.createRoot(document.getElementById("root"));
			// put the element we want as root/ base element	

		root.render(heading);
			// passing the react element inside the DOM, render method takes element and modifies the DOM	
