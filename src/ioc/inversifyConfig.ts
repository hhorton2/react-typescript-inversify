import { Container } from "inversify";
import { IToDoService } from "../services/to-do/IToDoService";
import { TYPES } from "./TYPES";
import { ToDoService } from "../services/to-do/ToDoService";
import { IHttpService } from "../services/http/IHttpService";
import { FakeHttpService } from "../services/http/FakeHttpService";

const appContainer = new Container();
appContainer.bind<IToDoService>(TYPES.IToDoService).to(ToDoService);
appContainer.bind<IHttpService>(TYPES.IHttpService).to(FakeHttpService);

export { appContainer };
