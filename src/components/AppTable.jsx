import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LoadingButton } from "@mui/lab";

export const AppTable = ({ data, deleteFn, editFn, completeFn }) => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      onClick={editFn}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={() => deleteFn(row.name)}
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!data.length > 0 && <LoadingButton loading>Submit</LoadingButton>}
    </>
  );
};
