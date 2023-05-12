import "./App.css";

export const App = () => {
  const phones = [
    {
      id: 1,
      name: "iPhone",
      rating: 4,
    },
    {
      id: 2,
      name: "Vivo",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Pixel",
      rating: 5,
    },
  ];

  const MAPPING = {
    iPhone: <h5>iPhone is an iPhone. Enough Said</h5>,
    Vivo: (
      <div>
        <h6>Vivo is just okay</h6>
      </div>
    ),
    Pixel: (
      <div>
        <h3>Best Phone Ever - Pixel</h3>
        <h4>It doesn't even need ratings!</h4>
      </div>
    ),
  };

  return (
    <main className="container">
      {phones.map((phone) => {
        // if (phone.name === "Pixel") {
        //   return (
        //     <div>
        //       <h3>Best Phone Ever - Pixel</h3>
        //       <h4>It doesn't even need ratings!</h4>
        //     </div>
        //   );
        // }
        // if (phone.name === "iPhone") {
        //   return <h5>iPhone is an iPhone. Enough Said</h5>;
        // }
        // if (phone.name === "Vivo") {
        //   return (
        //     <div>
        //       <h6>Vivo is just okay</h6>
        //     </div>
        //   );
        // }
        // switch (phone.name) {
        //   case "iPhone":
        //     return <h5>iPhone is an iPhone. Enough Said</h5>;
        //   case "Pixel":
        //     return (
        //       <div>
        //         <h3>Best Phone Ever - Pixel</h3>
        //         <h4>It doesn't even need ratings!</h4>
        //       </div>
        //     );
        //   case "Vivo":
        //     return (
        //       <div>
        //         <h6>Vivo is just okay</h6>
        //       </div>
        //     );
        //   default:
        //     return <h1>Not found</h1>;
        // }

        return MAPPING[phone.name];
      })}
    </main>
  );