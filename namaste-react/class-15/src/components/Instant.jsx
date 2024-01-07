import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-2 p-10 border border-cyan-900 bg-red-950 rounded-lg">
      <h1 className="text-2xl  text-green-500 font-extrabold">{title}</h1>
      <button
        onClick={setIsVisible}
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
  const [visibleSection, setVisibleSection] = useState("about");
  const toggleSection = (section) => {
    setVisibleSection((beforeSection) =>
      beforeSection == section ? null : section
    );
  };
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-blue-600 flex align-middle">
          Instant Delivery{" "}
          <h2 className="text-3xl text-orange-600">also available</h2>{" "}
        </h1>
        <Section
          title={"ABOUT INSTAMART"}
          description={"d"}
          isVisible={visibleSection == "about"}
          setIsVisible={() => toggleSection("about")}
        />

        <Section
          title={"TEAM INSTANT"}
          description={"d"}
          isVisible={visibleSection == "team"}
          setIsVisible={() => toggleSection("team")}
        />
        <Section
          title={"Careers"}
          description={"d"}
          isVisible={visibleSection == "career"}
          setIsVisible={() => toggleSection("career")}
        />
      </div>
    </>
  );
};
export default Instant;
