
import { useState } from "react";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

function App() {
  const [count, setCount] = useState(0);
  function decHandler() {
    if (count > 0) {
    setCount(count - 1);
    }
    else {
      alert('Counter Reached 0')
    }
  
}

function incHandler() {
  setCount(count+1);
}

  function resetHandler() {
  setCount(0);
}
  return (
    <div
      className="flex justify-center items-center flex-col gap-6 w-[100vw]
    h-[100vh] bg-slate-700 text-2xl text-white"
    >
      <h2>Increment And Decrement</h2>
      <div className="flex items-center bg-white  space-x-5 white  rounded-md p-1 justify-between w-[250px]">
        <Tooltip title="Delete">
          <Button
            color="error"
            onClick={decHandler}
            className="border-2 hover:bg-red-600 rounded-l-full  p-2 bg-[#545252]"
          >
            <RemoveIcon />
          </Button>
        </Tooltip>
        <div className=" text-black  text-[30px]">{count}</div>
        <Tooltip title="Increase">
          <Button
            onClick={incHandler}
            className="border-2 bg-[#000000] p-2 rounded-r-full"
          >
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
      <Button
        variant="outlined"
        color="error"
        onClick={resetHandler}
        className="  p-2 rounded-md text-xl"
      >
        Reset Counter
      </Button>
    </div>
  );
}

export default App;
