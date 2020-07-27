import { ToDoProps } from "./ToDoProps";
import React from "react";

export default function ToDo(props: ToDoProps) {
  return (
    <>
      <ul>
        <li>{props.toDo}</li>
      </ul>
    </>
  );
}
