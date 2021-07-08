import React, { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/en/");
  }, []);
  return <div>We are working on it</div>;
};

export default NotFoundPage;
