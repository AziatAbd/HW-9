import React, { useState } from "react";
import UserForm from "./components/UserForm";
import Userlist from "./components/Userlist";

function App() {
  const [todo, setTodo] = useState([]);

  function addTask(input, input2) {
    setTodo([
      ...todo,
      {
        input: input2,
        title: input,
        id: Math.random(),
      },
    ]);
  }

  function remove(idData) {
    setTodo(todo.filter((id) => id.id !== idData));
  }

  return (
    <div>
      <UserForm addTask={addTask} />
      <Userlist todo={todo} remove={remove} />
    </div>
  );
}

export default App;
