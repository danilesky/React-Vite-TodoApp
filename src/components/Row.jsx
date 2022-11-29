import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const Row = ({ item, editFn, deleteFn, completeFn }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [name, setName] = useState(item.name);

  const nameHandler = (name) => {
    setName(name);
  };
  const toggleHandler = (e) => {
    setToggleEdit(!toggleEdit);
  };
  const editHandler = (e) => {
    //On enter
    if (e.code === "Enter") {
      setToggleEdit(!toggleEdit);
      editFn(name, item.id);
    }
  };
  return (
    <TableRow key={item.name}>
      <TableCell component="th" scope="row" color="black">
        {!toggleEdit ? (
          name
        ) : (
          <TextField
            id="standard-basic"
            label={name}
            onChange={(e) => nameHandler(e.target.value)}
            onKeyDown={(e) => editHandler(e)}
            variant="standard"
          />
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton aria-label="edit" color="primary" onClick={toggleHandler}>
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => deleteFn(item.name)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="complete task" color="primary">
          <CheckCircleIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
