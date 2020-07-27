import React from "react";
import ToDoList from "./to-do-list/ToDoList";

function App() {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh"
    }}>
        <h1>My Incredible To Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
