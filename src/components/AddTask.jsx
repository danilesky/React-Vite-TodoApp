import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";

export const AddTask = ({ addFn }) => {
  const [name, setName] = useState(null);

  const nameHandler = (e) => {
    setName(e);
  };

  const addTaskHandler = (e) => {
    //On enter
    if (e.code === "Enter") {
      addFn(name);
      e.target.value = "";
      setName(null);
    }
    console.log(name);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label={!name ? "New task" : name}
        variant="outlined"
        onChange={(e) => nameHandler(e.target.value)}
        onKeyDown={(e) => addTaskHandler(e)}
      />
    </>
  );
};
