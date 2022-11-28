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
  const editHandler = () => {
    setToggleEdit(!toggleEdit);
  };
  return (
    <TableRow key={item.name}>
      <TableCell component="th" scope="row" color="black">
        {!toggleEdit ? (
          item.name
        ) : (
          <TextField
            id="standard-basic"
            label={item.name}
            onChange={(e) => editFn(e.target.value, item.id)}
            variant="standard"
          />
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton aria-label="edit" color="primary" onClick={editHandler}>
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
