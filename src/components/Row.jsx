import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const Row = ({ item, editFn, deleteFn, completeFn }) => {
  return (
    <TableRow key={item.name}>
      <TableCell component="th" scope="row" color="black">
        {item.name}
      </TableCell>
      <TableCell align="right">
        <IconButton
          aria-label="edit"
          color="primary"
          onClick={() => editFn(item.name)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => deleteFn(item.name)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="complete task"
          color="primary"
          onClick={completeFn}
        >
          <CheckCircleIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
