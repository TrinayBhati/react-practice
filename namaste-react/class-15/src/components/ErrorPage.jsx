import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText } = error;
  //destructure can use error.status in jsx as well
  console.log(error);
  return (
    <div>
      <h1>OOPS!!!!</h1>
      <h1> SOMETHING WENT wrong....</h1>
      <h2>
        {status} : {statusText}
      </h2>
    </div>
  );
};

export default ErrorPage;
