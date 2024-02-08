import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, settours] = useState(data);
  return (
    <>
      <Tours tours={tours} />
    </>
  );
};

export default App;
