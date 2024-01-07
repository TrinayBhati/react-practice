import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-2 p-10 border border-cyan-900 bg-red-950 rounded-lg">
      <h1 className="text-2xl  text-green-500 font-extrabold">{title}</h1>
      <button
        onClick={() => {
          setIsVisible();
        }}
        className="cursor-pointer m-3 bg-slate-400 p-1 border rounded-md"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <p className="text-xl text-yellow-500 font-semibold">{description}</p>
      )}
    </div>
  );
};

const Instant = () => {
  const [stateConfig, setStateConfig] = useState({
    about: false,
    team: true,
    career: false,
  });
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-blue-600 flex align-middle">
          Instant Delivery{" "}
          <h2 className="text-3xl text-orange-600">also available</h2>{" "}
        </h1>
        <Section
          title={"ABOUT INSTAMART"}
          description={
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          }
          isVisible={stateConfig.about}
          setIsVisible={() => {
            setStateConfig({
              about: true,
              team: false,
              career: false,
            });
          }}
        />
        <Section
          title={"TEAM INSTANT"}
          description={
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          }
          isVisible={stateConfig.team}
          setIsVisible={() => {
            setStateConfig({
              about: false,
              team: true,
              career: false,
            });
          }}
        />
        <Section
          title={"Careers"}
          description={
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          }
          setIsVisible={() => {
            setStateConfig({
              about: false,
              team: false,
              career: true,
            });
          }}
          isVisible={stateConfig.career}
        />
      </div>
    </>
  );
};
export default Instant;
