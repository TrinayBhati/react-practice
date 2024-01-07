import { Outlet } from "react-router-dom";
import ClassBasedProfile from "./ClassBasedProfile";

const About = () => {
  return (
    <>
      <h1>About us Page</h1>
      <h2> lesgoo</h2>
      <Outlet />
      <ClassBasedProfile name={"Trinay"} />
    </>
  );
};
export default About;
