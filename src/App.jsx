import { AppTable } from "./components/AppTable";
import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

const AppBody = styled(Box)`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const createItem = (name, description) => {
  return { name, description, completed: false };
};

const todoList = [
  createItem("Clean", "Zajr povysávať"),
  createItem("Upratovanie", "Zajr povysávať"),
  createItem("Cvicit", "Zajr povysávať"),
];

function App() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        if (todoList) {
          res(todoList);
        }
        rej("No data found");
      }, 2000);
    });
    const data = await promise.then((res) => res);
    setTodos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteTodo = (name) => {
    console.log(name);
    setTodos((oldTodos) => {
      return oldTodos.filter((todo) => todo.name !== name);
    });
  };

  return (
    <AppBody>
      <AppTable data={todos} deleteFn={deleteTodo} />
    </AppBody>
  );
}

export default App;
