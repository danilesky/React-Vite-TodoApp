import Box from "@mui/material/Box";
import { AppTable } from "./components/AppTable";
import { styled } from "@mui/material";

const AppBody = styled(Box)`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function createData(name, description) {
  return { name, description, completed: false };
}

const rows = [
  createData("Clean", "Zajr povysávať"),
  createData("Upratovanie", "Zajr povysávať"),
  createData("Cvicit", "Zajr povysávať"),
];

function App() {
  return (
    <AppBody>
      <AppTable data={rows} />
    </AppBody>
  );
}

export default App;
