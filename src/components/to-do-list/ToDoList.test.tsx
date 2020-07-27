import "reflect-metadata";
import { IToDoService } from "../../services/to-do/IToDoService";
import { Container } from "inversify";
import { TYPES } from "../../ioc/TYPES";
import { render } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { ServiceContext } from "../../contexts/ServiceContext";
import ToDoList from "./ToDoList";
import React from "react";
import * as faker from "faker";
import { act } from "react-dom/test-utils";
import { SynchronousPromise } from "synchronous-promise";

function mockToDoService(expectedToDo: string[] = []) {
  return {
    getToDos(): Promise<string[]> {
      return SynchronousPromise.resolve(expectedToDo);
    },
  } as IToDoService;
}

describe("ToDoList should ", () => {
  it("indicate if there are no to do items", async () => {
    const expectedEmptyMessage = "no todos (yet)";
    const toDoServiceMock = mockToDoService()
    const container = new Container();
    container
      .bind<IToDoService>(TYPES.IToDoService)
      .toConstantValue(toDoServiceMock);

    act(() => {
      render(
        <ServiceContext.Provider value={{ serviceContainer: container }}>
          <ToDoList />
        </ServiceContext.Provider>
      );
    });

    await waitFor(() => screen.getByText(expectedEmptyMessage));

    expect(screen.getByText(expectedEmptyMessage)).toHaveTextContent(
      expectedEmptyMessage
    );
  });
  it("fetch todos and display", async () => {
    const expectedToDo = faker.random.word();
    const toDoServiceMock = mockToDoService([...arrayOf(faker.random.word), expectedToDo]);
    const container = new Container();
    container
      .bind<IToDoService>(TYPES.IToDoService)
      .toConstantValue(toDoServiceMock);

    act(() => {
      render(
        <ServiceContext.Provider value={{ serviceContainer: container }}>
          <ToDoList />
        </ServiceContext.Provider>
      );
    });

    await waitFor(() => screen.getByText(expectedToDo));

    expect(screen.getByText(expectedToDo)).toHaveTextContent(expectedToDo);
  });
});

function arrayOf<T>(generator: () => T): T[] {
  const numberToGenerate = faker.random.number({ min: 2, max: 10 });
  const returnValue = [];
  for (let i = 0; i < numberToGenerate; i++) {
    returnValue.push(generator());
  }
  return returnValue;
}
