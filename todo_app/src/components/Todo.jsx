import { useState } from "react";
import CardList from "./CardList";

function Todo() {
  const [todo, setTodo] = useState([]);

  function handleAdd() {
    setTodo([...todo, "new task"]);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div>
          <h1
            style={{
              color: "#fefffb",
              fontSize: "60px",
            }}>
            Incoming
          </h1>
        </div>
        <div
          style={{
            padding: "20px 30px",
            backgroundColor: "#b0a3f5",
            fontSize: "50px",
            boarderRadius: "10px",
            color: "white",
            fontWeight: "bold",
          }}>
          {todo.length}
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          background: "#fefffe",
          width: "500px",
          borderRadius: "10px",
          margin: "20px 0px",
          fontSize: "25px",
          color: "#7b7b7b",
        }}
        onClick={() => handleAdd()}>
        + Add New Tasks
      </div>
      {todo.map((item) => {
        return <CardList task={item} />;
      })}
    </div>
  );
}
export default Todo;
