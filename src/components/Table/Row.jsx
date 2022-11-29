import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { styled } from "@mui/system";

const StyledRow = styled(TableRow)`
  transition: 0.3s ease;
  &.completed {
    background: green;
    transition: 0.3s ease;
  }
`;

export const Row = ({ item, editFn, deleteFn, completeFn }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [completed, setCompleted] = useState(false);

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
  const completeHandler = () => {
    setCompleted(!completed);
    setTimeout(() => {
      completeFn(item.id);
    }, 350);
  };
  return (
    <StyledRow className={completed ? "completed" : ""} key={item.name}>
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
          onClick={() => deleteFn(item.id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="complete task"
          color="primary"
          onClick={completeHandler}
        >
          <CheckCircleIcon />
        </IconButton>
      </TableCell>
    </StyledRow>
  );
};
