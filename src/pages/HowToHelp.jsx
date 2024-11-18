import React, { useEffect } from "react";

const HowToHelp = () => {
  useEffect(() => {
    document.title = "How to Help";
  }, []);
  return <div>HowToHelp</div>;
};

export default HowToHelp;
