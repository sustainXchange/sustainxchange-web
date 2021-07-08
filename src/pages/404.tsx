import React, { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
  useEffect(() => {
    console.log("we are here");

    navigate("/de/");
  }, []);
  return <div>We are working on it</div>;
};

export default NotFoundPage;
