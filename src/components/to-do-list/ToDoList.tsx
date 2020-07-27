import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../../contexts/ServiceContext";
import { IToDoService } from "../../services/to-do/IToDoService";
import { TYPES } from "../../ioc/TYPES";
import ToDo from "../to-do/ToDo";

export default function ToDoList() {
  const context = useContext(ServiceContext);
  const [toDoList, setToDoList] = useState<string[]>([]);
  useEffect(() => {
    const toDoService = context.serviceContainer.get<IToDoService>(
      TYPES.IToDoService
    );
    toDoService.getToDos().then((todos) => {
      setToDoList(todos);
    });
  }, []);
  return (
    <>
      {toDoList.length === 0 && <span>no todos (yet)</span>}
      {toDoList.length > 1 &&
        toDoList.map((t, i) => {
          return <ToDo key={i} toDo={t} />;
        })}
    </>
  );
}
