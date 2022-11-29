import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LoadingButton } from "@mui/lab";
import { Row } from "./Row";

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
              data.map((item) => (
                <Row
                  key={item.id}
                  item={item}
                  deleteFn={deleteFn}
                  editFn={editFn}
                  completeFn={completeFn}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!data.length > 0 && <LoadingButton loading>Submit</LoadingButton>}
    </>
  );
};
