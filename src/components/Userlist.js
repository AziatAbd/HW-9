import React from "react";
import UserItem from "./UserItem";

function Userlist({ todo, remove }) {
  return (
    <div>
      {todo.map((item) => {
        return (
          <UserItem
            key={item.id}
            id={item.id}
            title={item.title}
            input={item.input}
            remove={remove}
          />
        );
      })}
    </div>
  );
}

export default Userlist;
