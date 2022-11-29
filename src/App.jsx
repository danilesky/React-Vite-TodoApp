import { AppTable } from "./components/Table/AppTable";
import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { AddTask } from "./components/AddTask";

const AppBody = styled(Box)`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const createItem = (id, name, description) => {
  return { id, name, description, completed: false };
};

const todoList = [
  createItem(0, "Clean", "Zajr povysávať"),
  createItem(1, "Upratovanie", "Zajr povysávať"),
  createItem(2, "Cvicit", "Zajr povysávať"),
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

  const editTodo = (name, id) => {
    setTodos((newTodos) => {
      return newTodos.map((item) => {
        if (item.id === id) {
          item.name = name;
        }
        return item;
      });
    });
  };

  const addTodo = (name) => {
    setTodos((oldTodos) => {
      const lastIndex = oldTodos.length ? oldTodos[oldTodos.length - 1] : 0;
      const newTodo = {
        id: lastIndex + 1,
        name: name,
        description: "",
      };
      return [...oldTodos, newTodo];
    });
  };

  return (
    <AppBody>
      <AddTask addFn={addTodo} />
      <AppTable data={todos} deleteFn={deleteTodo} editFn={editTodo} />
    </AppBody>
  );
}

export default App;
